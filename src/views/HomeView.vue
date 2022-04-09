<template>
  <div class="home">
    <Header/>
    <Carousel v-if="getFindText === ''"/>
    <MovieList/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/header/header.vue'
import Carousel from '../components/carousel/carousel.vue'
import MovieList from '../components/movieList/movieList.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'HomeView',

  data(){
    return{
      textoBusqueda: ''
    }
  },

  components: {
    Header,
    Carousel,
    MovieList
  },

  computed:{
    ...mapGetters(['getFindText'])
  },

}
</script>
