import React from 'react'
import s from "./DayData.module.css"
import commonStyles from "../../WeekForecastItems.module.css"


const DayData = React.memo(({day}) => {
        return <div className={s.dayDataWrapper}>
            <div className={commonStyles.forecastItemInfo}>
                <p>{day}</p>
            </div>
        </div>
    }
)


export default DayData