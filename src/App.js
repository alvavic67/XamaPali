import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Login from "./pages/login";
import Report from "./pages/reporte";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Login /> */}
        <Report
          title="Generar reporte"
          description="Esta ventana es para generar un reporte"
          action="Generar"
        />
      </header>
    </div>
  );
}

export default App;
