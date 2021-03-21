import axios from "axios";

const instance = axios.create ({
    baseURL: 'https://community-open-weather-map.p.rapidapi.com/',
    headers: {
        /*'x-rapidapi-key': '7fd42db77bmsh129da9804f01968p1018fcjsn872884f7434f',
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'*/
        'x-rapidapi-key': '5b1ebfdfdemshc9756a039c9c124p158fe2jsn8c2dcf327056',
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
    }
})


export const userWeatherAPI = {
    getUserCurrentWeather(userCity) {
        return instance.get(`weather?q=${userCity}`)
    },


}