import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
            <ul className="lol">
                <li>
                   <FormattedDate  date={props.data.date}/>
                </li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
           <div className="row">
            <div className="col-6">
                <div className="clearFix">
            <img src={props.data.iconUrl} 
            className="float-left" alt={props.data.description} />
            </div>
            <div className="float-left">
                <span className="temperature">{Math.round(props.data.temperature)}</span><span className="unit">°C</span>|<span>°F</span>
                </div>
            </div>
            <div className="col-6">
            <ul>
                <li>
                    Precipitation: 15%
                </li>
                <li>
                    Humidity: {props.data.humidity}%
                </li>
                <li>
                   wind: {props.data.wind} 13 km/h
                </li>
            </ul>
            </div>
           </div>
        </div>
    );
}