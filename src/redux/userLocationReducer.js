import {userLocationAPI} from "../API/userLocationAPI";

const GET_USER_CITY = 'userLocation/SET_USER_CITY'
const GET_USER_COORDS = 'userLocation/GET_USER_COORDS'

let initialState = {
    userCity: null,
    userCountry: null,
    lat: null,
    lon: null,
}

export const userLocationReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_CITY:
            return { ...state, userCity: action.userCity, userCountry: action.userCountry }
        case GET_USER_COORDS:
            return { ...state,  lat: action.lat, lon: action.lon}
        default:
            return state
    }
}

export const getUserCitySuccess = (userCity, userCountry) => ({
    type: GET_USER_CITY,
        userCity, userCountry
})
export const getUserCoordsSuccess = (lat, lon) => ({
    type: GET_USER_COORDS,
    lat, lon
})

export const getUserCoords = () => (dispatch) => {
    navigator.geolocation.getCurrentPosition(function(position) {
        dispatch(getUserLocation(position.coords.latitude, position.coords.longitude))
        dispatch(getUserCoordsSuccess(position.coords.latitude, position.coords.longitude))
    });
}

export const getUserLocation = (latitude, longitude) => async (dispatch) => {
    try {
        let response = await userLocationAPI.getUserLocation(latitude, longitude)

        const userLocation = response.data.results[0].components
        const userCountry = userLocation.country
        const userCity = userLocation.town || userLocation.village || userLocation.municipality

        dispatch(getUserCitySuccess(userCity, userCountry));
    } catch(error) {
        console.log("Some error occured");
    }
}