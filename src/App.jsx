export default function App() {
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      background: "linear-gradient(180deg, #000000 0%, #140018 100%)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      fontFamily: "Arial, sans-serif",
      position: "relative",
      overflow: "hidden"
    }}>

      <h1 style={{
        fontSize: "5rem",
        color: "#ff004c",
        textShadow: "0 0 20px #ff004c, 0 0 50px #9900ff",
        letterSpacing: "8px"
      }}>
        DUKO
      </h1>

      <h2 style={{
        marginTop: "10px",
        fontWeight: "200",
        letterSpacing: "6px",
        color: "#aaa"
      }}>
        ASSIGNMENT 04
      </h2>

      <div style={{
        marginTop: "50px",
        padding: "30px 60px",
        borderRadius: "15px",
        border: "1px solid #ff004c",
        background: "rgba(0,0,0,0.6)",
        boxShadow: "0 0 30px #ff004c"
      }}>
        <p style={{ marginBottom: "10px" }}>
          Aplicación Web Dockerizada
        </p>
        <p style={{ color: "#9900ff" }}>
          GitHub Actions + Docker Hub
        </p>
      </div>

      <div style={{
        position: "absolute",
        bottom: "20px",
        fontSize: "0.8rem",
        color: "#333"
      }}>
        Tematica de: fuck luv duki
      </div>

    </div>
  );
}
