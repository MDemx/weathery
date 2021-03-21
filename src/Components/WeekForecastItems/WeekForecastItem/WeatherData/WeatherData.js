import React from 'react'
import s from "./WeatherData.module.css"
import commonStyles from "../../WeekForecastItems.module.css"
import cn from "classnames"

export const WeatherData = ({temperature, weatherDescription}) => {
    return <div className={s.weatherDataWrapper}>
        <div className={cn(commonStyles.forecastItemInfo, s.temperature)}>
            <p>{temperature}°C</p>
        </div>
        <div className={cn(commonStyles.forecastItemInfo, s.weatherDescription)}>
            <p>{weatherDescription}</p>
        </div>
    </div>
}