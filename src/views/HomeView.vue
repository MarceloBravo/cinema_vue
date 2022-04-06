<template>
  <div class="home">
    <Header/>
    <Carousel/>
    <MovieList/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/header/header.vue'
import Carousel from '../components/carousel/carousel.vue'
import MovieList from '../components/movieList/movieList.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Carousel,
    MovieList
  }
}
</script>
