import axios from "axios"

export const instanceAxios = axios.create({
    baseUrl:"https://car-data.p.rapidapi.com/cars"
})