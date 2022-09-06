import {useEffect, useState} from "react";
import Weather from "./components/Weather";
import Search from "./components/Search";

import styles from './styles/App.module.css'
import Loading from "./components/Loading";

function App() {
    const [weather, setWeather] = useState<any>({})
    const [loading, setLoading] = useState<boolean>(false)
    const [submit, setSubmit] = useState<boolean>(false)

    const getData = (weather : string) => {
      setLoading(true)
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=cef680e64469e54b6f2eb9f337b96a29&units=metric`
        fetch(url)
            .then(res => res.json())
            .then(res => setWeather({
                name: res.name,
                description: res.weather[0].description,
                temp: res.main.temp,
                id: res.id,
                icon: res.weather[0].icon
            }))
            setLoading(false)

    }

    const loadingContent  = loading ? <Loading/> : null
    const content = submit ? <Weather weather={weather} /> : null

  return (
    <div className='py-8 bg-blue-400 h-screen'>
      <div className={styles.container} >
        <div className={styles.card}>
          <h1 className='font-bold text-black'>Welcome to my Weather App</h1>
          <Search getData={getData} setSubmit={setSubmit}/>
        </div>
        {loadingContent}
        {content}
        
      </div>
        
    </div>
  );
}

export default App;
