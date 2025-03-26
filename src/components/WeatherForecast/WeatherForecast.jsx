import React from 'react';
import './WeatherForecast.css';

const WeatherForecast = (props) => {
    return (
        <div className="weather">
            <h2>{props.forecast.day}</h2>
            <img src={props.forecast.img} alt={props.forecast.imgAlt} />
            <p><span>{props.forecast.conditions}</span></p>
            <p><span>{props.forecast.time}</span></p>
        </div>
    )
}
export default WeatherForecast;