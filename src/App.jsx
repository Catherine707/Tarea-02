import { useState } from "react";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");

  const addContact = () => {
    if (name.trim() === "") return;
    setContacts([...contacts, name]);
    setName("");
  };

  return (
    <div className="container">
      <h1>Agenda Web</h1>

      <div className="form">
        <input
          placeholder="Nombre del contacto"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={addContact}>Agregar</button>
      </div>

      <ul>
        {contacts.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
