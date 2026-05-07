function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        padding: "2rem",
        textAlign: "center"
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          marginBottom: "1rem"
        }}
      >
        Trevis Cleary
      </h1>

      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "normal",
          opacity: 0.8
        }}
      >
        Vice President of Technical Services and Analytics
      </h2>

      <p
        style={{
          maxWidth: "700px",
          marginTop: "2rem",
          lineHeight: "1.8",
          fontSize: "1.1rem"
        }}
      >
        Healthcare IT leader focused on automation, infrastructure,
        analytics, systems modernization, and operational technology.
      </p>
    </div>
  );
}

export default App;