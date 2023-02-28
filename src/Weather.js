import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      date: "Tuesday 11:00 AM",
      iconUrl: response.data.condition.icon_url,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form className="search-form mb-3">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city"
                  autoComplete="on"
                  className="form-control"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search 🔍"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>

          <h1>{weatherData.city}</h1>
          <h5 className="text-capitalize"> {weatherData.description} </h5>
          <h6>{weatherData.date}</h6>

          <div className="row">
            <div className="col-6">
              <div className="clearfix weather-temperature">
                <img
                  src={weatherData.iconUrl}
                  alt={""}
                  className="float-left"
                  width="100"
                />
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="units">°C</span>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
        <footer>
          <a
            href="https://github.com/Danieli-Costa/Weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          , by Danieli Costa
        </footer>
      </div>
    );
  } else {
    let apiKey = "d35a0c64b9o513ea503tbfbd3bee0b13";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading ...";
  }
}
