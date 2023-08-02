import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1 className="city">New York</h1>
      <ul>
        <li className="date">Tuesday 04:00</li>
        <li className="description">Sunny</li>
      </ul>

      <div class="row">
        <div class="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="icon"
            />

            <span className="temperature">12</span>
            <span className="units">°C</span>
          </div>
        </div>
        <div class="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
