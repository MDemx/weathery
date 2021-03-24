import React, {useEffect} from 'react'
import {WeekForecastItem} from "./WeekForecastItem/WeekForecastItem";
import s from "./WeekForecastItems.module.css";
import {useDispatch, useSelector} from "react-redux";
import {getWeekForecastData} from "../../Selectors/weekForecastSelectors";
import {getUserCoordsLat, getUserCoordsLon} from "../../Selectors/userLocationSelectors";
import {getCurrentDay} from "../../Selectors/currentDayTimeSelectors";
import {getForecast} from "../../redux/forecastReducer";
import {WeekForecastItems} from "./WeekForecastItems";

export const WeekForecastItemsContainer = (props) => {
    const today = new Date()
    let dayNum = today.getDay()

    /*Days start from Sunday because in this case all days will be displayed correctly*/
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    return <div>
        <WeekForecastItems dayNum={dayNum} days={days} />
    </div>
}