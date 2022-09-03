import {useEffect, useState} from "react";
import Weather from "./components/Weather";
import './styles/style.css'

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
        <h1>Welcome to my Weather App</h1>
      <Weather weather={weather}/>
    </div>
  );
}

export default App;
