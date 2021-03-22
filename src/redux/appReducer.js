import {getUserCoords} from "./userLocationReducer";
import {getForecast} from "./forecastReducer";

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

export const initializeApp = (lat, lon, currentDay) => (dispatch) => {
    let promise = [dispatch(getUserCoords(lat, lon)), dispatch(getForecast(lat, lon, currentDay))]

    Promise.all([promise])
        .then( () => {
            dispatch(initializeSuccess());
        })
}

export default appReducer;