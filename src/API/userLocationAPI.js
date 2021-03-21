import axios from "axios";

const instance = axios.create ({
    baseURL: 'https://api.opencagedata.com/'
})

export const userLocationAPI = {
    getUserLocation(latitude, longitude) {
        return instance.get(`geocode/v1/json?q=${latitude}+${longitude}&key=744294860dd0478b89d80a08c094bda1`)
    }
}
