<template>
    <div class="similar-movies-container">
        <div v-for="(item, key) in videos" :key="key">
            <MovieCard :data="item"/>
        </div>
    </div>
</template>

<style lang="scss">
    @import './similarMovieList.scss';
</style>

<script>
    import { mapGetters } from 'vuex'
    import MovieCard from '../../components/movieCard/movieCard.vue'

    export default {
        name: 'SimilarMovieListComponent',

        components:{
            MovieCard
        },

        computed:{
            ...mapGetters(['getSimilarMovies'])
        },

        watch:{
            getSimilarMovies:function(){
                this.videos = this.getSimilarMovies.results
            }
        },

        data(){
            return {
                videos: {
                    page: 0,
                    results: []
                }
            }
        }
    }
</script>