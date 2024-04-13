import axios from 'axios'

console.log(import.meta.env)

export const api = axios.create({
    baseURL: import.meta.env.MODE === 'development' ?
        'http://localhost:3000/api/' :
        '/api/',
    headers: {
        'Content-Type': 'application/json',
    },
})