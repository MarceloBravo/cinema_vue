import axios from "axios";
import { endPoint, apiKey } from '../global/constants'


export  const getTopRated = (store) => {
    axios.get(`${endPoint}movie/top_rated?api_key=${apiKey}&language=en-US`).then(res => {
        store.dispatch('topRated',res.data)
    }).catch(error =>{
        console.log('getMoviesList', error) 
        store.dispatch('topRated',[])
    })
}

export  const getPopularMovies = (store) => {
    axios.get(`${endPoint}movie/popular?api_key=${apiKey}&language=en-US&page=1`).then(res => {
        store.dispatch('popularMovies',res.data)
    }).catch(error =>{
        console.log('getPopularMovies', error);
        store.dispatch('popularMovies',[])
    })
}

export const getFindMovieByText = (store, text) => {
    axios.get(`${endPoint}search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${text}`).then(res  =>{
        console.log('RES. BÚSQUEDA',res.data)
        store.dispatch('findMovieByText', res.data)
    }).catch(error => {
        console.log('Error en getFindMovieByText: ', error)
        store.dispatch('findMovieByText', [])
    })
}