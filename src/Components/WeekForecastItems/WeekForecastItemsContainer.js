import React from 'react'
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