import axios from "axios";

const instance = axios.create ({
    baseURL: 'https://weatherbit-v1-mashape.p.rapidapi.com/',
    headers: {
        'x-rapidapi-key': '7fd42db77bmsh129da9804f01968p1018fcjsn872884f7434f',
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
    }
})

export const forecastAPI = {
    getForecast(lat, lon) {
        return instance.get(`forecast/daily?lat=${lat}&lon=${lon}`)
    }
}