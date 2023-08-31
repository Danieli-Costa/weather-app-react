import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  function convertToFahreinheit(event) {
    event.preventDefault();
    props.setUnit("fahreinheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }

  if (props.unit === "celsius") {
    return (
      <span>
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={convertToFahreinheit} rel="noopener noreferrer">
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahreinheit = (props.celsius * 9) / 5 + 32;
    return (
      <span>
        <span className="temperature">{Math.round(fahreinheit)}</span>
        <span className="units">
          <a href="/" onClick={convertToCelsius} rel="noopener noreferrer">
            °C{" "}
          </a>
          | °F
        </span>
      </span>
    );
  }
}
