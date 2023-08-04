import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <a
            href="https://github.com/Danieli-Costa/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          , by Danieli Costa
        </footer>
      </div>
    </div>
  );
}
