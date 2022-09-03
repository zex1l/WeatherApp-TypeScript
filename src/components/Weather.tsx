import {FC} from "react";
import {IWeather} from "../interface/weatherInterface";

interface WeatherDataProps {
    weather : IWeather
}

const Weather:FC<WeatherDataProps> = ({weather}) => {

    return (
        <div key={weather.id}>
            <div>{weather.name}</div>
            <div>{weather.temp}</div>
            <div>{weather.description}</div>
        </div>
    );
};

export default Weather;