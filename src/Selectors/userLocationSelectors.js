export const getUserCity = (state) => {
    return state.userLocation.userCity
}
export const getUserCountry = (state) => {
    return state.userLocation.userCountry
}
export const getUserCoordsLat = (state) => {
    return state.userLocation.lat
}
export const getUserCoordsLon = (state) => {
    return state.userLocation.lon
}
export const getError = (state) => {
    return state.userLocation.error
}

