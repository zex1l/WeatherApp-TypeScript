import {useEffect, useState} from "react";
import {IWeather} from "./interface/weatherInterface";
import Weather from "./components/Weather";

function App() {
    const [weather, setWeather] = useState<any>({})

    const getData = () => {
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=cef680e64469e54b6f2eb9f337b96a29&units=metric'
        fetch(url)
            .then(res => res.json())
            .then(res => setWeather({
                name: res.name,
                description: res.weather[0].description,
                temp: res.main.temp,
                id: res.id
            }))

    }

    useEffect(() => {
        getData()
    }, [])


    useEffect(() => {
        console.log(weather)
    }, [weather])


  return (
    <div className="App">
      <Weather weather={weather}/>
    </div>
  );
}

export default App;
