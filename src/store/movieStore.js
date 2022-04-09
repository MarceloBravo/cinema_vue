const state = {
    movieDetail:{
        adult: false,
        backdrop_path: "",
        belongs_to_collection: null,
        budget: 0,
        genres: [],
        homepage: "",
        id: 0,
        imdb_id: "",
        original_language: "",
        original_title: "",
        overview: "",
        popularity: 0,
        poster_path: "",
        production_companies: [],
        production_countries: [],
        release_date: "",
        revenue: 0,
        runtime: 0,
        spoken_languages: [],
        status: "",
        tagline: "",
        title: "",
        video: false,
        vote_average: 0,
        vote_count: 0
    },
    movieVideo: {
        id: 0,
        results: []
    },
    visibilityVideoState: false,
}

const getters = {
    getMovieDetail: state => state.movieDetail,

    getMovieVideo:state => state.movieVideo,

    getVisibilityVideoState: state => state.visibilityVideoState
}

const mutations = {
    setMovieDetail(state, data){
        state.movieDetail = data
    },

    setMovieVideo(state, data){
        state.movieVideo = data
    },

    setVisibilityVideoStrate(state, data){
        state.visibilityVideoState = data
    }
}

const actions = {
    movieDetail:(context, data) => context.commit('setMovieDetail', data),

    movieVideo:(context, data) => context.commit('setMovieVideo', data),

    visibilityVideoState:(context, data) => context.commit('setVisibilityVideoStrate', data)
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