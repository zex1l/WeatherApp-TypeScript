import {FC} from "react";
import {IWeather} from "../interface/weatherInterface";
import styles from "../styles/App.module.css"

interface WeatherDataProps {
    weather : IWeather,
}

const Weather:FC<WeatherDataProps> = ({weather}) => {
    
    return (
        <div className={styles.cardWeather}>
            <div key={weather.id}>
                <div>{weather.name}</div>
                <img className='block m-auto' src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="" />
                <div>temp: {weather.temp}°C</div>
                <div>{weather.description}</div>
            </div>
        </div>
        
    );
};

export default Weather;