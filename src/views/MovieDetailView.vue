<template>
    <div>
        <Header/>
        <div class="content-movie-detail">
            <div>
                <img 
                    class="poster-image"
                        :src="posterEndPoint + $store.getters.getMovieDetail.poster_path" 
                        :alt="$store.getters.getMovieDetail.title"
                    >
            </div>
            <div class="background-image-content">
                <img 
                    class="background-image"
                    :src="posterEndPoint + $store.getters.getMovieDetail.backdrop_path"
                    :alt="$store.getters.getMovieDetail.title"
                >
            </div>
            <div class="movie-detail">
                <h1>{{ $store.getters.getMovieDetail.title }}</h1>   
                <p>
                    {{ $store.getters.getMovieDetail.overview }}
                </p>
                <p v-if="generos.length > 0">
                    {{ generos }}
                </p> 
                <p>
                    Duración: {{ $store.getters.getMovieDetail.runtime }} minutes
                </p>
                <p>
                    Nota promedio: {{ $store.getters.getMovieDetail.vote_average }} de 10
                </p>
                <p>
                    Fecha de lanzamiento: {{ this.$store.getters.getMovieDetail.release_date.split('-').reverse().join('-') }}
                </p>
                <p>
                    Página oficial: <a :href="$store.getters.getMovieDetail.homepage" target="blanck">{{ $store.getters.getMovieDetail.homepage }}</a>
                </p>

                <h3>Producido por: </h3>
                <div class="logo-company">
                    <img v-for="(company, key) in this.$store.getters.getMovieDetail.production_companies" :key="key"
                    :src="posterEndPoint + company.logo_path" 
                    :alt="company.name"
                >    
                </div>

                

            </div>
            
        </div>
    </div>
</template>

<script>
    import Header from '../components/header/header.vue'
    import { getMovie } from '../axios/movieDetail.js'
    import { posterEndPoint } from '@/global/constants';
    

    export default {
        name: 'MovieDefault',

        data(){
            return {
                posterEndPoint,
                generos: [],
                productionCompanies: [],
                fechaLanzamiento: ''
            }
        },

        components:{
            Header
        },

        props: {
            id: {type: String}
        },

        mounted(){
            getMovie(this.$store, this.$route.params.id)
            
            const genre = this.$store.getters.getMovieDetail.genres.map(g => g.name )
            this.generos = genre.length > 0 ? 'Género: ' + genre.join(', ') : ''

            //this.productionCompanies = this.$store.getters.getMovieDetail.production_companies
            //this.fechaLanzamiento = this.$store.getters.getMovieDetail.release_date.split('-').reverse().join('-')

            
        }
    }
</script>

<style lang="scss">
    @import '../style/views/MovieDetailView.scss';
</style>