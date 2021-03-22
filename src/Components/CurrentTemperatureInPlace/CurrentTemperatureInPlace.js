import React from 'react'
import {CurrentWeather} from "./CurrentWeather/CurrentWeather"
import {CurrentPlace} from "./CurrentPlace/CurrentPlace"
import s from "./CurrentTemperatureInPlace.module.css"
import {useSelector} from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import {getIsFetching} from "../../Selectors/currentUserWeatherSelectors";

export const CurrentTemperatureInPlace = (props) => {

    return <div className={s.wrapper}>
        <CurrentWeather/>
        <CurrentPlace/>
    </div>
}