import axios from "axios";
import { endPoint, apiKey } from '../constants/js/constants'


export  const getTopRated = (store) => {
    axios.get(`${endPoint}movie/top_rated?api_key=${apiKey}&language=en-US`).then(res => {
        store.dispatch('topRated',res.data)
        store.dispatch('findText', '')
    }).catch(error =>{
        console.log('getMoviesListError', error) 
        store.dispatch('errorHandler',[])
    })
}

export  const getPopularMovies = (store) => {
    axios.get(`${endPoint}movie/popular?api_key=${apiKey}&language=en-US&page=1`).then(res => {
        store.dispatch('popularMovies',res.data)
    }).catch(error =>{
        console.log('getPopularMoviesError', error);
        store.dispatch('errorHandler',[])
    })
}

export const getFindMovieByText = (store, text) => {
    axios.get(`${endPoint}search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${text}`).then(res  =>{
        store.dispatch('findMovieByText', res.data)
        store.dispatch('findText', text)
    }).catch(error => {
        console.log('Error en getFindMovieByText: ', error)
        store.dispatch('errorHandler', [])
    })
}