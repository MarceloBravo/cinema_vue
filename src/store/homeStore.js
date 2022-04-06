const state = {
    popularMovies: {
      page: 0,
      results: [],
      total_pages: 0,
      total_results: 0
    },
    moviesList: {
      page: 0,
      results: [],
      total_pages: 0,
      total_results: 0
    },
    movie: {
        adult: false,
        backdrop_path: '',
        genre_ids: [],
        id: 0,
        original_language: '',
        original_title: '',
        overview: '',
        popularity: 0,
        poster_path: '',
        release_date: '',
        title: '',
        video: false,
        vote_average: 0,
        vote_count: 0
      },
    typeMovie: ''
  }


const getters = {
    getPopularMovies(state){return state.popularMovies},

    getMoviesList(state){return state.moviesList},

    getTopRated(state){return state.topRated},

    getMovie(state){return state.movie}
  }


 const mutations = {
    setPopularMovies: (state, data) => state.popularMovies = data,

    setTopRated: (state, list) => state.moviesList = list,

    setFindMovieByText: (state ,data) => state.moviesList = data,

    setMovie: (state, data) => state.movie = data

  }

const actions = {
    popularMovies: ( context, data ) => context.commit( 'setPopularMovies', data),

    topRated: (context, data) => context.commit('setTopRated', data),

    findMovieByText: ( context, data ) => context.commit('setFindMovieByText', data),

    movie: (context, data) => context.commit('setMovie', data)
  }


const modules = {
  }


export default {
    state,
    getters,
    mutations,
    actions,
    modules
}
