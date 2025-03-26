import React from 'react';
import './WeatherForecast.css';

const WeatherForecast = ({forecast}) => {
    return (
        <div className="weather">
            <h2>{forecast.day}</h2>
            <img src={forecast.img} alt={forecast.imgAlt} />
            <p><span>{forecast.conditions}</span></p>
            <p><span>{forecast.time}</span></p>
        </div>
    )
}
export default WeatherForecast;