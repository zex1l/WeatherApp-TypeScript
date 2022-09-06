import {useState, FC} from 'react'
import styles from "../styles/App.module.css"

interface SearchProps {
    getData: any,
    setSubmit: any
}

const Search:FC <SearchProps> = ({getData, setSubmit}) => {
    const [weather, setWeather] = useState('')

    const handlerSubmit = () => {
        getData(weather)
        setSubmit(true)
        setWeather('')
    }

    return (
        <div className='m-5'>
            <input className={styles.input} placeholder='Search weather in your town' type="text" onChange={e => setWeather(e.target.value)}/>  
            <button className={styles.btn} onClick={handlerSubmit}>Search</button> 
        </div>
    );
};

export default Search;