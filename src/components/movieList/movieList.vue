<template>
    <div>
        <h2 class="titleSection"> {{ titleSection }} </h2>
        <div class="catalogo-container">
            <div v-for="(item, i) in $store.getters.getMoviesList.results" :key="i" class="movie-container">
                <MovieCard :data="item" />
            </div>
        </div>
    </div>
</template>

<script>
    import MovieCard from '../../components/movieCard/movieCard.vue'
    import { getTopRated } from '../../axios/moviesLists.js'

    export default {
        name: 'MovieListComponent',

        data(){
            return {
                titleSection: 'Más populares'
            }
        },

        mounted(){
            getTopRated(this.$store)
        },

        components:{
         MovieCard   
        }
    }
</script>

<style lang="scss">
    @import './movieList.scss';
</style>