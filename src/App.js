import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/Jatingupta9120/weather-react-app.git">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.linkedin.com/in/jatin-gupta9120/">
          Jatin Gupta
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="https://www.htmlhints.com/">
          HTML HINTS
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
