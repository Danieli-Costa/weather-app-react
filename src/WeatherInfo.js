import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="city mt-3">{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row mt-3 mb-3">
        <div className="col-6">
          <WeatherIcon
            code={props.data.icon}
            size={62}
            className="weather-icon"
          />

          <WeatherTemperature
            celsius={props.data.temperature}
            setUnit={props.setUnit}
            unit={props.unit}
          />
        </div>
        <div className="col-6">
          <ul>
            <li>
              <i class="fa-solid fa-temperature-empty"></i> Feels like:{" "}
              {Math.round(props.data.feels_like)}°
            </li>
            <li>
              <i class="fa-solid fa-droplet"></i> Humidity:{" "}
              {props.data.humidity}%
            </li>
            <li>
              <i class="fa-solid fa-wind"></i> Wind:{" "}
              {Math.round(props.data.wind)} km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
