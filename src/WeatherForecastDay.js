import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature;
    if (props.unit === "celsius") {
      temperature = Math.round(props.data.temperature.maximum);
    } else {
      temperature = Math.round(props.data.temperature.maximum * 9) / 5 + 32;
    }
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature;
    if (props.unit === "celsius") {
      temperature = Math.round(props.data.temperature.minimum);
    } else {
      temperature = Math.round(props.data.temperature.minimum * 9) / 5 + 32;
    }
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.temperature.day * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={36} />
      <div className="forecast-temperatures">
        <span className="forecast-temp-max">{maxTemp()} </span>
        <span className="forecast-temp-min">{minTemp()}</span>
      </div>
    </div>
  );
}
