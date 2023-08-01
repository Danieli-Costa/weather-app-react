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
            <input type="submit" value="Search " className="btn btn-primary " />
          </div>
        </div>
      </form>
      <h1 className="city">New York</h1>
      <h5 className="date">Tuesday 04:00</h5>
      <h6 className="description">Sunny</h6>

      <div class="row">
        <div class="col-6">
          <img src="#" alt="weather" />

          <strong className="temperature">12</strong>
          <span className="units">°C</span>
        </div>
        <div class="col-6">
          <ul>
            <li>Precipitation:</li>
            <li>Humidity:</li>
            <li>Wind:</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
