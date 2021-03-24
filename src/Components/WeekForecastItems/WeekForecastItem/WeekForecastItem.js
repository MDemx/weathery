import React from 'react'
import {WeatherData} from "./WeatherData/WeatherData";
import DayData from "./DayData/DayData";
import s from "./WeekForecastItem.module.css"

export const WeekForecastItem = ({temperature, weatherDescription, day}) => {

    /*Temperature from server response is in Kelvins and should be converted to Celsium*/
    temperature = Math.ceil(temperature - 273.15)

    return <div className={s.forecastWrapper}>

        <WeatherData temperature={temperature} weatherDescription={weatherDescription}/>
        <DayData day={day}/>
    </div>
}