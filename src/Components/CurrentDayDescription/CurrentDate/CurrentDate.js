import React from 'react'
import s from "./CurrentDate.module.css"

export const CurrentDate = (props) => {
    return <div className={s.wrapper}>
        <p className={s.date}>{props.date}</p>
    </div>
}