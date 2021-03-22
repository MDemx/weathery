import React, {useEffect} from 'react'
import {WeekForecastItem} from "./WeekForecastItem/WeekForecastItem";
import s from "./WeekForecastItems.module.css";
import {useDispatch, useSelector} from "react-redux";
import {getIsFetching, getWeekForecastData} from "../../Selectors/weekForecastSelectors";
import {getUserCoordsLat, getUserCoordsLon} from "../../Selectors/userLocationSelectors";
import {getCurrentDay} from "../../Selectors/currentDayTimeSelectors";
import {getForecast} from "../../redux/forecastReducer";
import Preloader from "../common/Preloader/Preloader";

export const WeekForecastItems = (props) => {

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

    const today = new Date()
    let dayNum = today.getDay()

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  /*  const isFetching = useSelector(getIsFetching)

    if (isFetching) {
        return <Preloader/>
    }
*/
    return <div className={s.forecastItemsWrapper}>
        <h2>Weekly forecast</h2>
        <div>
            {Object.keys(weekForecastData).map( key => {
                return <WeekForecastItem temperature={weekForecastData[key].temp.day} weatherDescription={weekForecastData[key].weather[0].main}
                                         key={key} day={
                                            (dayNum + parseInt(key)) > (days.length - 1)
                                            ? days[((parseInt(key)) % days.length) - (days.length - dayNum)]
                                            : days[(dayNum + ((parseInt(key)) % days.length))]
                }
                />
            } )}

        </div>
    </div>
}