import React, {useEffect} from 'react'
import {CurrentDate} from "./CurrentDate/CurrentDate"
import {CurrentDayTime} from "./CurrentDayTime/CurrentDayTime"
import {useDispatch, useSelector} from "react-redux";
import {setCurrentDayTime} from "../../redux/currentDayTimeReducer";
import {getCurrentDate, getCurrentDay, getCurrentTime} from "../../Selectors/currentDayTimeSelectors";

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
