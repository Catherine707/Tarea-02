import { useEffect, useMemo, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../api/tasks";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const loadTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (error) {
      console.error("Error cargando tareas:", error);
      setErrorMessage("No se pudieron cargar las tareas.");
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((task) => task.completed).length;
    const pending = total - completed;

    return { total, completed, pending };
  }, [tasks]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!form.title.trim()) {
      setErrorMessage("El título es obligatorio.");
      return;
    }

    try {
      await createTask({
        title: form.title.trim(),
        description: form.description.trim(),
        completed: false,
      });

      setForm({
        title: "",
        description: "",
      });

      await loadTasks();
    } catch (error) {
      console.error("Error creando tarea:", error);
      setErrorMessage("No se pudo crear la tarea.");
    }
  };

  const toggleCompleted = async (task) => {
    try {
      await updateTask(task.id, {
        completed: !task.completed,
      });
      await loadTasks();
    } catch (error) {
      console.error("Error actualizando tarea:", error);
      setErrorMessage("No se pudo actualizar la tarea.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      await loadTasks();
    } catch (error) {
      console.error("Error eliminando tarea:", error);
      setErrorMessage("No se pudo eliminar la tarea.");
    }
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <header style={headerStyle}>
          <div>
            <p style={eyebrowStyle}>Assignment 05</p>
            <h1 style={titleStyle}>Task Manager Dashboard</h1>
            <p style={subtitleStyle}>
              Aplicación web para gestionar tareas conectada a una API con Django y PostgreSQL.
            </p>
          </div>
        </header>

        <section style={statsGridStyle}>
          <div style={statCardStyle}>
            <span style={statLabelStyle}>Total de tareas</span>
            <strong style={statValueStyle}>{stats.total}</strong>
          </div>

          <div style={statCardStyle}>
            <span style={statLabelStyle}>Completadas</span>
            <strong style={statValueStyle}>{stats.completed}</strong>
          </div>

          <div style={statCardStyle}>
            <span style={statLabelStyle}>Pendientes</span>
            <strong style={statValueStyle}>{stats.pending}</strong>
          </div>
        </section>

        <section style={mainGridStyle}>
          <div style={panelStyle}>
            <h2 style={sectionTitleStyle}>Nueva tarea</h2>
            <p style={sectionTextStyle}>
              Completa el formulario para registrar una nueva tarea.
            </p>

            <form onSubmit={handleSubmit}>
              <label style={labelStyle}>Título</label>
              <input
                type="text"
                placeholder="Ej. Preparar entrega final"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                style={inputStyle}
              />

              <label style={labelStyle}>Descripción</label>
              <textarea
                placeholder="Escribe una descripción breve"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                style={textareaStyle}
              />

              {errorMessage && <p style={errorStyle}>{errorMessage}</p>}

              <button type="submit" style={primaryButtonStyle}>
                Agregar tarea
              </button>
            </form>
          </div>

          <div style={panelStyle}>
            <h2 style={sectionTitleStyle}>Lista de tareas</h2>
            <p style={sectionTextStyle}>
              Aquí puedes visualizar, actualizar y eliminar tareas.
            </p>

            {tasks.length === 0 ? (
              <div style={emptyStateStyle}>
                <p style={{ margin: 0 }}>No hay tareas registradas todavía.</p>
              </div>
            ) : (
              <div style={taskListStyle}>
                {tasks.map((task) => (
                  <div key={task.id} style={taskCardStyle}>
                    <div style={taskHeaderStyle}>
                      <div>
                        <h3 style={taskTitleStyle}>{task.title}</h3>
                        <p style={taskDescriptionStyle}>
                          {task.description || "Sin descripción"}
                        </p>
                      </div>

                      <span
                        style={{
                          ...badgeStyle,
                          backgroundColor: task.completed ? "#14532d" : "#78350f",
                        }}
                      >
                        {task.completed ? "Completada" : "Pendiente"}
                      </span>
                    </div>

                    <div style={actionsStyle}>
                      <button
                        onClick={() => toggleCompleted(task)}
                        style={secondaryButtonStyle}
                      >
                        Cambiar estado
                      </button>

                      <button
                        onClick={() => handleDelete(task.id)}
                        style={dangerButtonStyle}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #0f172a 0%, #111827 55%, #1e293b 100%)",
  color: "#e5e7eb",
  padding: "32px 20px",
};

const containerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const headerStyle = {
  marginBottom: "24px",
};

const eyebrowStyle = {
  color: "#93c5fd",
  fontSize: "14px",
  marginBottom: "8px",
  textTransform: "uppercase",
  letterSpacing: "1px",
};

const titleStyle = {
  fontSize: "48px",
  fontWeight: "700",
  margin: "0 0 12px 0",
};

const subtitleStyle = {
  color: "#cbd5e1",
  maxWidth: "760px",
  lineHeight: "1.6",
  margin: 0,
};

const statsGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "16px",
  marginBottom: "24px",
};

const statCardStyle = {
  background: "rgba(15, 23, 42, 0.75)",
  border: "1px solid #334155",
  borderRadius: "18px",
  padding: "20px",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.20)",
};

const statLabelStyle = {
  display: "block",
  color: "#94a3b8",
  marginBottom: "12px",
};

const statValueStyle = {
  fontSize: "36px",
  fontWeight: "700",
};

const mainGridStyle = {
  display: "grid",
  gridTemplateColumns: "minmax(300px, 380px) 1fr",
  gap: "24px",
};

const panelStyle = {
  background: "rgba(15, 23, 42, 0.82)",
  border: "1px solid #334155",
  borderRadius: "20px",
  padding: "24px",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.20)",
};

const sectionTitleStyle = {
  margin: "0 0 8px 0",
  fontSize: "24px",
};

const sectionTextStyle = {
  margin: "0 0 20px 0",
  color: "#94a3b8",
  lineHeight: "1.5",
};

const labelStyle = {
  display: "block",
  marginBottom: "8px",
  color: "#cbd5e1",
  fontSize: "14px",
};

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  marginBottom: "16px",
  borderRadius: "12px",
  border: "1px solid #475569",
  background: "#0f172a",
  color: "#e5e7eb",
  outline: "none",
  boxSizing: "border-box",
};

const textareaStyle = {
  width: "100%",
  minHeight: "130px",
  padding: "14px 16px",
  marginBottom: "16px",
  borderRadius: "12px",
  border: "1px solid #475569",
  background: "#0f172a",
  color: "#e5e7eb",
  outline: "none",
  resize: "vertical",
  boxSizing: "border-box",
};

const primaryButtonStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "12px",
  border: "none",
  background: "#2563eb",
  color: "white",
  fontWeight: "600",
  cursor: "pointer",
};

const secondaryButtonStyle = {
  padding: "10px 14px",
  borderRadius: "10px",
  border: "none",
  background: "#475569",
  color: "white",
  cursor: "pointer",
};

const dangerButtonStyle = {
  padding: "10px 14px",
  borderRadius: "10px",
  border: "none",
  background: "#dc2626",
  color: "white",
  cursor: "pointer",
};

const errorStyle = {
  color: "#fca5a5",
  marginBottom: "16px",
};

const emptyStateStyle = {
  padding: "20px",
  borderRadius: "14px",
  background: "#0f172a",
  border: "1px dashed #475569",
  color: "#94a3b8",
};

const taskListStyle = {
  display: "grid",
  gap: "16px",
};

const taskCardStyle = {
  padding: "18px",
  borderRadius: "16px",
  background: "#0f172a",
  border: "1px solid #334155",
};

const taskHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "16px",
  marginBottom: "16px",
};

const taskTitleStyle = {
  margin: "0 0 8px 0",
  fontSize: "20px",
};

const taskDescriptionStyle = {
  margin: 0,
  color: "#cbd5e1",
  lineHeight: "1.5",
};

const badgeStyle = {
  color: "white",
  padding: "8px 12px",
  borderRadius: "999px",
  fontSize: "13px",
  whiteSpace: "nowrap",
};

const actionsStyle = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
};

export default Dashboard;