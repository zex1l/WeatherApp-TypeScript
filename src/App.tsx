import { useState} from "react";
import Weather from "./components/Weather";
import Search from "./components/Search";

import styles from './styles/App.module.css'
import Loading from "./components/Loading";
import Error from "./components/Error";

function App() {
    const [weather, setWeather] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const getData = (weather : string) => {
      setError(false)
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
            .catch(err => {
              setError(true)
            })
            setLoading(false)

    }


  return (
    <div className='py-8 bg-blue-400 h-screen'>
      <div className={styles.container} >
        <div className={styles.card}>
          <h1 className='font-bold text-black'>Welcome to my Weather App</h1>
          <Search getData={getData} />
        </div>
          {loading ? <Loading/> : weather && !error && <Weather weather={weather}/>}
          {error ? <Error/> : null}
        
      </div>
        
    </div>
  );
}

export default App;
