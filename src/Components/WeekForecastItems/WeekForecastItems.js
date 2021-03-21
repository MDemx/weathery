import React, {useEffect} from 'react'
import {WeekForecastItem} from "./WeekForecastItem/WeekForecastItem";
import s from "./WeekForecastItems.module.css";
import {useDispatch, useSelector} from "react-redux";
import {getWeekForecastData} from "../../Selectors/weekForecastSelectors";
import {getUserCoordsLat, getUserCoordsLon} from "../../Selectors/userLocationSelectors";
import {getCurrentDay} from "../../Selectors/currentDayTimeSelectors";
import {getForecast} from "../../redux/forecastReducer";

export const WeekForecastItems = (props) => {
    /*getting forecast data from server*/
    const userCoordLat = useSelector(getUserCoordsLat)
    const userCoordLon = useSelector(getUserCoordsLon)
    const currentDay = useSelector(getCurrentDay)
    const weekForecastData = useSelector(getWeekForecastData)

    const dispatch = useDispatch()
    const callGetForecast = (userCoordLat, userCoordLon, currentDay) => {
        dispatch(getForecast(userCoordLat, userCoordLon, currentDay))
    }

    useEffect(() => {
        callGetForecast(userCoordLat, userCoordLon, currentDay)
    }, [userCoordLat, userCoordLon, currentDay])
    /*/getting forecast data from server*/

    const today = new Date()
    let dayNum = today.getDay()
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    return <div className={s.forecastItemsWrapper}>
        <h2>Weekly forecast</h2>
        <div>
            {Object.keys(weekForecastData).map( key => {
                return <WeekForecastItem temperature={weekForecastData[key].temp.day} weatherDescription={weekForecastData[key].weather[0].main}
                                         key={key} day={
                                            (dayNum + parseInt(key)) > days.length
                                            ? days[((parseInt(key)) % days.length) - ((days.length + 1) - dayNum)]
                                            : days[(dayNum + ((parseInt(key)) % days.length))]
                }
                />
            } )}

        </div>
    </div>
}