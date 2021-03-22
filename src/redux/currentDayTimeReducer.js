const SET_CURRENT_DAY_AND_TIME = 'currentDayTime/SET_CURRENT_DAY_AND_TIME'
const TOGGLE_FETCHING = 'currentDayTime/TOGGLE_FETCHING'

let initialState = {
    day: null,
    date: null,
    time: null,
    startIndex: 0,
    isFetching: false
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
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}


export const setCurrentDayTimeSuccess = (day, date, time) => ({
    type: SET_CURRENT_DAY_AND_TIME,
    day, date, time
})

export const toggleFetching = (isFetching) => ({
    type: TOGGLE_FETCHING,
    isFetching
})

export const setCurrentDayTime = (today) => (dispatch) => {
    dispatch(toggleFetching(true));
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
    dispatch(toggleFetching(false));
}
