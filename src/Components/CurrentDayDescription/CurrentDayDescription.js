import React, {useEffect} from 'react'
import {CurrentDate} from "./CurrentDate/CurrentDate"
import {CurrentDayTime} from "./CurrentDayTime/CurrentDayTime"
import {useDispatch, useSelector} from "react-redux";
import {getCurrentDate, getCurrentDay, getCurrentTime} from "../../Selectors/currentDayTimeSelectors";
import {setCurrentDayTime} from "../../Reducers/currentDayTimeReducer";

export const CurrentDayDescription = (props) => {

    const currentDay = useSelector(getCurrentDay);
    const currentDate = useSelector(getCurrentDate);
    const currentTime = useSelector(getCurrentTime);

    const dispatch = useDispatch()
    const callSetCurrentDayTime = (today) => {
        dispatch(setCurrentDayTime(today))
    }


    useEffect( () => {
        /* I've set interval 1s to always display current time*/
        setInterval( () => {
            let today = new Date()
            callSetCurrentDayTime(today)
        }, 1000 );
    }, [currentDay, currentDate, currentTime])

    return <div>
        <CurrentDayTime day={currentDay} time={currentTime} />
        <CurrentDate date={currentDate}/>
    </div>
}
