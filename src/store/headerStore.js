const state = {
    findText: ''
}

const getters = {
    getFindText:state => state.findText
}

const mutations = {
    setFindText(state, data){
        console.log('setFindText',data)
        state.findText = data
    }
}

const actions = {
    findText:(context, data) => context.commit('setFindText', data)
}

export default {
    state,
    getters,
    mutations,
    actions
}