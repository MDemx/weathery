const SET_CURRENT_DAY_AND_TIME = 'currentDayTime/SET_CURRENT_DAY_AND_TIME'

let initialState = {
    day: null,
    date: null,
    time: null,
    startIndex: 0,
}

export const currentDayTimeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_DAY_AND_TIME:
            return {
                ...state,
                day: action.day,
                date: action.date,
                time: action.time
            }
        default:
            return state
    }
}


export const setCurrentDayTimeSuccess = (day, date, time) => ({
    type: SET_CURRENT_DAY_AND_TIME,
    day, date, time
})

export const setCurrentDayTime = (today) => (dispatch) => {

    const date = today.toLocaleDateString().split("/").join(".")

    const hours = today.getHours()
    let minutes = today.getMinutes()
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    const time = [hours, minutes].join(":")

    const dayNum = today.getDay()
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const day = days[dayNum]

    dispatch(setCurrentDayTimeSuccess(day, date, time))
}
