import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      feels_like: response.data.temperature.feels_like,
      icon_url: response.data.condition.icon_url,
      icon: response.data.condition.icon,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search "
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1 className="city">{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="description text-capitalize">
            {weatherData.description}
          </li>
        </ul>

        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img src={weatherData.icon_url} alt={weatherData.icon} />

              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "New York";
    const apiKey = "d35a0c64b9o513ea503tbfbd3bee0b13";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
