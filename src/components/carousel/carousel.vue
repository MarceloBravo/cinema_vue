<template>
    <div class="carousel-container">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <!--
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-label="Slide 1" class="active" aria-current="true"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            -->
            <div class="carousel-inner">
                <div :class="`carousel-item ${i === 0 ? 'active' : ''}`" v-for="(item, i) in $store.getters.getPopularMovies.results" :key="i">
                    <img 
                        :src="'https://image.tmdb.org/t/p/w500'+item.backdrop_path" 
                        class="d-block w-100" 
                        :alt="item.title"
                        @click="movieDetail(item.id)"
                    >
                    <div class="carousel-caption d-none d-md-block">
                        <h5>{{ item.title }}</h5>
                        <p>{{ item.overview }}</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>

</template>

<script>
    import { getPopularMovies } from '../../axios/moviesLists.js'
    import { getMovie, getMovieVideo, getReviews, getCredits, getSimilarMovies } from '../../axios/movieDetail.js'

    export default {
        name: 'CarouselComponent',

        mounted(){
            getPopularMovies(this.$store)
        },

        methods: {
            movieDetail(id){
                const store = this.$store
                getMovie(store, id)
                getMovieVideo(store, id)
                getReviews(store, id, 1)
                getCredits(store, id)
                getSimilarMovies(store, id)

                this.$router.push('/movie-detail/' + id)
            }
        },
        
    }
</script>

<style lang="scss">
    @import './carousel.scss';
</style>