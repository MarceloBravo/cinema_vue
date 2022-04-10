import axios from 'axios'
import { endPoint, apiKey } from '../constants/js/constants'

export const getMovie = (store, id) => {
    axios.get(`${endPoint}/movie/${id}?api_key=${apiKey}&language=en-US`).then(res => {
        store.dispatch('movieDetail', res.data)
    }).catch(error => {
        console.log('getMovie', error)
        store.dispatch('movieDetail', null)
    })
} 

export const getMovieVideo = (store, id) => {
    axios.get(`${endPoint}movie/${id}/videos?api_key=${apiKey}&language=en-US`).then(res => {
        //console.log('GETVIDEO', res)
        store.dispatch('movieVideo', res.data)
    }).catch( error => {
        console.log('getVideo', error)
        store.dispatch('movieVideo', null)
    })
}