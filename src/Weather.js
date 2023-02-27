import React from "react";
import "./Weather.css";

export default function App() {
  let weatherData = {
    city: "New York",
    temperature: 19,
    date: "Friday 03/02/2023",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    humidity: 80,
    wind: 10,
  };
  return (
    <div className="Weather">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
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
            <h5> {weatherData.date} </h5>
            <h6>{weatherData.description}</h6>

            <div className="row">
              <div className="col-6">
                <div className="clearfix weather-temperature">
                  <img
                    src={weatherData.imgUrl}
                    alt={weatherData.description}
                    className="float-left"
                    width="100"
                  />

                  <strong className="temperature">
                    {weatherData.temperature}
                  </strong>
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
        </div>
      </div>
    </div>
  );
}
