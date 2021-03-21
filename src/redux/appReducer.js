import {getUserCoords} from "./userLocationReducer";
import {getForecast} from "./forecastReducer";
import {getUserCurrentWeather} from "./userCurrentWeatherReducer";
import {setCurrentDayTime} from "./currentDayTimeReducer";

const INITIALIZE = 'app/INITIALIZE'

let initialState = {
    isInitialized: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE:
            return { ...state, isInitialized: true}
        default:
            return state
    }
}

export const initializeSuccess = () => ({
    type: INITIALIZE,
})

export const initializeApp = (lat, lon, currentDay, userCity, today) => (dispatch) => {
    let promise = [dispatch(getUserCoords(lat, lon)), dispatch(getForecast(lat, lon, currentDay)), dispatch(getUserCurrentWeather(userCity)), setCurrentDayTime(today)]

    Promise.all([promise])
        .then( () => {
            dispatch(initializeSuccess());
        })
}

export default appReducer;