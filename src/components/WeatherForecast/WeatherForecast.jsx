import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import WeatherData from "../WeatherData/WeatherData";

const WeatherForecast = ({ forecast }) => {
  return (
    <div className="weather">
      <h2>{forecast.day}</h2>
      <img src={forecast.img} alt={forecast.imgAlt} />
      <p>
        <span>Conditions:</span>
        {forecast.conditions}
      </p>
      <p>
        <span>Time: </span>
        {forecast.time}
      </p>
    </div>
  );
};
export default WeatherForecast;
