import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData/';
import './styles.css';
 
import {
  FOG,
  WINDY,
} from './../../constants/weathers'

const data = {
  temperature: 5,
  weatherState: FOG,
  humidity: 11,
  wind: '10 m/s'
}

const data2 = {
    temperature: 15,
    weatherState: WINDY,
    humidity: 90,
    wind: '90 m/s'
  }

class WeatherLocation extends Component {

    constructor () {
        super();
        this.state = {
            city: 'La Plata',
            data: data
        };
    }

    handleUpdateClick = () => {
        console.log("actualizado");

        this.setState({
            city: 'other city',
            data: data2
        });
    };
    render() {
        const { city, data } = this.state;

        return (
            <div className="weatherLocationCont">
                <Location city={city}/>
                <WeatherData data={data}/>
                <button onClick={this.handleUpdateClick}>Update</button>
            </div>
        );
    };
};

export default WeatherLocation;