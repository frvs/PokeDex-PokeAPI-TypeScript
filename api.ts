import axios from 'axios'

const BASE_URL = `https://pokeapi.co/api/v2`

export function get<T>(endpoint: string) {
    return axios.get(`${BASE_URL}/${endpoint}`)
        .then((response) => {
            const data: T = response && response.data
            return data 
        })
}