import axios from 'axios'
import { endPoint, apiKey } from '../constants/js/constants'

export const getMovie = (store, id) => {
    axios.get(`${endPoint}/movie/${id}?api_key=${apiKey}&language=en-US`).then(res => {
        store.dispatch('movieDetail', res.data)
    }).catch(error => {
        console.log('getMovieError', error)
        store.dispatch('errorHandler', null)
    })
} 

export const getMovieVideo = (store, id) => {
    axios.get(`${endPoint}movie/${id}/videos?api_key=${apiKey}&language=en-US`).then(res => {
        store.dispatch('movieVideo', res.data)
    }).catch( error => {
        console.log('getVideoError', error)
        store.dispatch('errorHandler', null)
    })
}


export const getReviews = (store, movieId, page) => {
    axios.get(`${endPoint}movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=${page}`).then(res => {
        store.dispatch('reviews', res.data)
    }).catch(error =>{
        console.log('getReviewsError', error)
        store.dispatch('errorHandler', null)
    })
}


export const getCredits = (store, movieId) => {
    axios.get(`${endPoint}movie/${movieId}/credits?api_key=${apiKey}&language=en-US`).then( res => {
        store.dispatch('credits', res.data)
    }).catch(error => {
        console.log('getCreditsError', error)
        store.dispatch('errorHandler', error)
    })
}


export const getSimilarMovies = (store, movieId) => {
    axios.get(`${endPoint}movie/${movieId}/similar?api_key=${apiKey}&language=en-US`).then(res => {
        store.dispatch('similarMovies', res.data)
    }).catch(error => {
        console.log('getSuimilarMoviesError',error)
        store.dispatch('errorHandler', error)
    })
}