import React from 'react'
import {CurrentDayDescription} from "../CurrentDayDescription/CurrentDayDescription"
import {CurrentTemperatureInPlace} from "../CurrentTemperatureInPlace/CurrentTemperatureInPlace"
import {WeekForecastItems} from "../WeekForecastItems/WeekForecastItems"
import s from "./MainContainer.module.css"
import {Banner} from "../Banner/Banner";

export const MainContainer = (props) => {
    return <div className={s.wrapper}>
        <div className={s.leftContentWrapper}>
            <CurrentDayDescription/>
            <CurrentTemperatureInPlace/>
        </div>
        <div className={s.banner}>
            <Banner/>
        </div>
        <div className={s.rightContentWrapper}>
            <WeekForecastItems/>
        </div>
    </div>
}