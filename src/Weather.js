import React, {useState} from "react";
import axios from "axios";
import './Weather.css'
import Search from "./Search"


export default function Weather(props){
    const [weatherData, setWeatherData] = useState ({ready: false});
    function handleResponse(response){
        console.log(response.data)


        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            data: "Wednesday 07:00",
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            wind: response.data.wind.temp,
            city: response.data.name

        });
    }

    if(weatherData.ready){
       return(
            <div className="Weather">
                <Search />
            <h1>{weatherData.city}</h1>
            <ul className="lol">
                <li>
                    {weatherData.date}
                </li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
           <div className="row">
            <div className="col-6">
                <div className="clearFix">
            <img src={weatherData.iconUrl} 
            className="float-left" alt={weatherData.description} />
            </div>
            <div className="float-left">
                <span className="temperature">{Math.round(weatherData.temperature)}</span><span className="unit">°C</span>|<span>°F</span>
                </div>
            </div>
            <div className="col-6">
            <ul>
                <li>
                    Precipitation: 15%
                </li>
                <li>
                    Humidity: {weatherData.humidity}%
                </li>
                <li>
                   wind: {weatherData.wind} 13 km/h
                </li>
            </ul>
            </div>
           </div>
            </div>
        );

    } else{
        const apiKey = "9cb72bec958f8fb02391985ed7b219d2";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
       return "Loading....";
    }
    
}