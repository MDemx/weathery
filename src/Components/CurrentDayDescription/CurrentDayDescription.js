import React, {useEffect} from 'react'
import {CurrentDate} from "./CurrentDate/CurrentDate"
import {CurrentDayTime} from "./CurrentDayTime/CurrentDayTime"
import s from "./CurrentDayDescription.module.css"
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
        setInterval( () => {
            let today = new Date()
            callSetCurrentDayTime(today)
        }, 1000 );
    }, [currentDay, currentDate, currentTime])

    return <div className={s.wrapper}>
        <CurrentDayTime day={currentDay} time={currentTime} />
        <CurrentDate date={currentDate}/>
    </div>
}
