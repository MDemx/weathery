import React from 'react'
import {CurrentWeather} from "./CurrentWeather/CurrentWeather"
import {CurrentPlace} from "./CurrentPlace/CurrentPlace"
import s from "./CurrentTemperatureInPlace.module.css"

export const CurrentTemperatureInPlace = (props) => {
    return <div className={s.wrapper}>
        <CurrentWeather/>
        <CurrentPlace/>
    </div>
}