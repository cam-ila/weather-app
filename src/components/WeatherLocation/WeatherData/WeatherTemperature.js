import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
    FOG,
} from './../../../constants/weathers';
import './styles.css'

const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy",
    [FOG]: "day-fog",
};


const sizeIcon = "4x"
const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if (icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon}/>;

    return  <WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon}/>;
};

const WeatherTemperature = ({temperature, weatherState}) => (
  <div className="weatherTemperatureCont">
    {
      getWeatherIcon(weatherState)
    }
    <span className="temperature">{`${temperature} `}</span>
    <span className="temperatureType">C°</span>
  </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;