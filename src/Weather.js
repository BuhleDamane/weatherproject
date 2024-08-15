import React, {useState} from "react";
import axios from "axios";
import './Weather.css'
import Search from "./Search"


export default function Weather(){
    const [ready, setReady] = useState(false);
    const [temperature, setTemperature] = useState (null);
    function handleResponse(response){
        console.log(response.data)
        setTemperature(response.data.main.temp);
        setReady(true);
    }

    if(ready){
       return(
            <div className="Weather">
                <Search />
            <h1>Carletonville</h1>
            <ul className="lol">
                <li>
                    Wednesday 07:00
                </li>
                <li>Moslty Cloudy</li>
            </ul>
           <div className="row">
            <div className="col-6">
                <div className="clearFix">
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" className="float-left" alt="Partly Cloudy" />
            </div>
            <div className="float-left">
                <span className="temperature">{temperature}</span><span className="unit">°C</span>|<span>°F</span>
                </div>
            </div>
            <div className="col-6">
            <ul>
                <li>
                    Precipitation: 15%
                </li>
                <li>
                    Humidity: 72%
                </li>
                <li>
                    Wind: 13 km/h
                </li>
            </ul>
            </div>
           </div>
            </div>
        );

    } else{
        const apiKey = "13d2ee51f9b4o75695t30ad14de90637";
        let city = "Carletonville";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
       return "iyeza....";
    }
    
}