export const getCurrentDay = (state) => {
    return state.currentDayTime.day
}
export const getCurrentDate = (state) => {
    return state.currentDayTime.date
}
export const getCurrentTime = (state) => {
    return state.currentDayTime.time
}
export const getIsFetching = (state) => {
    return state.currentDayTime.isFetching
}