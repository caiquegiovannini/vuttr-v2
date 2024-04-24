import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://vuttr-api-murex.vercel.app/api/',
    headers: {
        'Content-Type': 'application/json',
    },
})