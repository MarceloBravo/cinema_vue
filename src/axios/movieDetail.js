import axios from 'axios'
import { endPoint, apiKey } from '../global/constants'

export const getMovie = (store, id) => {
    axios.get(`${endPoint}/movie/${id}?api_key=${apiKey}&language=en-US`).then(res => {
        console.log(res.data)
        store.dispatch('movieDetail', res.data)
    }).catch(error => {
        console.log('getMovie', error)
        store.dispatch('movieDetail', null)
    })
} 
