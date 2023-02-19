import React from 'react';
import './WeatherSearch.css';
import axios from 'axios';
import { useState } from 'react';

export default function WeatherSearch() {
    const [city, setCity] = useState("");
    const [conditions, setConditions] = useState([]);
  
    function handleSubmit(event) {
      event.preventDefault();
  
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
      let apiKey = `091ee062af9bb6b7026312ecec49397c`;
      axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
    }
  
    function changeCity(event) {
      setCity(event.target.value);
    }
  
    function showTemperature(Response) {
      setConditions(Response.data);
      
    }
  
    return (
      <div className="WeatherSearch">
        <form onSubmit={handleSubmit}>
          <input type="search" placeholder="Type a city" onChange={changeCity} />
          <input type="submit" value="Search" />
        </form>
        {conditions.main && (
          <ul className="weather-list">
            <li>Temperature: {conditions.main.temp} </li>
            <li>Description: {conditions.weather[0].description} </li>
            <li>Humidity: {conditions.main.humidity} </li>
            <li>Wind: {conditions.wind.speed} </li>
          </ul>
        )}
      </div>
    );
  }