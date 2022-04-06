import homeStore from './homeStore.js'
import movieStore from './movieStore.js'
import { createStore } from 'vuex'

const store = createStore({
  //Varios stores se unifican en un sólo módulo
  modules:{ 
    homeStore,
    movieStore
  }

})

export default store