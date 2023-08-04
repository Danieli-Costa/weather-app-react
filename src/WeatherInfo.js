import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="city">{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="description text-capitalize">
          {props.data.description}
        </li>
      </ul>

      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img src={props.data.icon_url} alt={props.data.icon} />

            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="units">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
