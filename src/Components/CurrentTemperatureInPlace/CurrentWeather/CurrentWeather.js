import React, {useEffect} from 'react'
import s from "../CurrentTemperatureInPlace.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getCurrentTemperature, getCurrentWeatherDescription} from "../../../Selectors/currentUserWeatherSelectors";
import {getUserCurrentWeather} from "../../../redux/userCurrentWeatherReducer";
import {getUserCity} from "../../../Selectors/userLocationSelectors";

export const CurrentWeather = (props) => {

    const currentTemperature = useSelector(getCurrentTemperature)
    const userCity = useSelector(getUserCity)
    const currentWeatherDescription = useSelector(getCurrentWeatherDescription)

    const dispatch = useDispatch();
    const callGetUserCurrentWeather = (city) => {
        dispatch(getUserCurrentWeather(city))
    }

    useEffect(() => {
        callGetUserCurrentWeather(userCity)

        /*Here i've set interval 60s to get actual weather when customer is on site */
        setInterval( () => {
            callGetUserCurrentWeather(userCity)
        }, 600000)
    }, [currentTemperature, userCity])

    return <div className={s.currentWeatherInfoWrapper}>
        <p className={s.temperature}>{currentTemperature}°C</p>
        <p className={s.currentWeatherDescription}>{currentWeatherDescription}</p>
    </div>
}