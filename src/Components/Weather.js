import React from 'react';
import '../index.css';
import '../App.css';

function Weather(props) {
  
  return (
    <div className='App'>
      <div className="row">
            <div className="col s12 m6 push-m3">
                <div className="weather card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{props.name}</span>
                        <p><img src={"http://openweathermap.org/img/wn/" + props.icon + "@2x.png"} /></p>
                        <span className="temperature">{props.temp}°C</span>
                        <p>Min : {props.temp_min}°C</p>
                        <p>Max : {props.temp_max}°C</p>
                        <div className="wind">Vent {props.wind}km/h</div>
                        <div className="wind">Taux d'humidité : {props.humidity}%</div>
                    </div>
                </div>
            </div>
      </div>
      
    </div>
      

  );
}

export default Weather;
