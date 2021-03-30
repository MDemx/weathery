import React, {useEffect} from 'react'
import {WeekForecastItem} from "./WeekForecastItem/WeekForecastItem";
import {useDispatch, useSelector} from "react-redux";
import {getWeekForecastData} from "../../Selectors/weekForecastSelectors";
import {getUserCoordsLat, getUserCoordsLon} from "../../Selectors/userLocationSelectors";
import {getCurrentDay} from "../../Selectors/currentDayTimeSelectors";
import {getForecast} from "../../redux/forecastReducer";
import styled from "styled-components"


const ForecastItemsWrapper = styled.div`
    float: right;
    background-color: rgba(0, 0, 0, 0.4);
    height: 100vh;
    width: 50vh;
    
    & h2 {
        text-align: center;
        font-size: 1.3em;
    }
    
    @media screen and (max-width: 800px) {
        min-width: 100%;
    }
`


export const WeekForecastItems = ({dayNum, days}) => {

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

    return <ForecastItemsWrapper>
        <h2>Weekly forecast</h2>
        <div>
            {Object.keys(weekForecastData).map( key => {
                return <WeekForecastItem temperature={weekForecastData[key].temp.day} weatherDescription={weekForecastData[key].weather[0].main}
                                         key={key} day={
                                             /*Passes the right day the WeekForecastItem component must display*/
                                            (dayNum + parseInt(key)) > (days.length - 1)
                                            ? days[((parseInt(key)) % days.length) - (days.length - dayNum)]
                                            : days[(dayNum + ((parseInt(key)) % days.length))]
                }
                />
            } )}

        </div>
    </ForecastItemsWrapper>
}