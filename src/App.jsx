import ViewMap from "./components/ViewMap";

function App() {
  return (
    <div style={{}}>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        {/* Title */}
        <h1>Major Crimes Reported In Toronto</h1>
      </div>

      {/* Map */}
      <ViewMap />
    </div>
  );
}

export default App;
