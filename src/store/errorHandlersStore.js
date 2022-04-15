const state = {
    error: null
}

const getters = {
    getError: state => state.error
}

const mutations = {
    setError(state, data){
        state.error = data
    }
}

const actions = {
    errorHandler: (context, data) => context.commit('setError', data)
}

export default {
    state,
    getters,
    mutations,
    actions
}