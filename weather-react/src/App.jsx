import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInformation from './components/WeatherInfo/WeatherInformation'
import WeatherInformations5Days from './components/WeatherInformation5Days/WeatherInformation5Days'

function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()
  const inputRef = useRef()

async function searchCity(){
    console.log(inputRef.current.value)
    const city =  inputRef.current.value
    
    const key = '4a7b55a9eb06254f86cea77e26aeed10'
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    const apiInfo5Days = await axios.get(url5Days)
    setWeather(apiInfo.data)
    setWeather5Days(apiInfo5Days.data)


  }

  return (
    
      <div className='container'>
        <h1>Previsão do tempo</h1>
        <input ref={inputRef} type="text" placeholder='Digite o nome da cidade' />
        <button onClick={searchCity}>Buscar</button>

       {weather && <WeatherInformation weather={weather}/>}
       {weather5Days && <WeatherInformations5Days weather5Days ={weather5Days} />}
      </div> 
    
  )
}

export default App
