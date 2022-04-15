<template>
    <div>
        <Header/>
        <div class="content-movie-detail">
            <div>
                <div class="poster-image-content">
                    <img 
                        class="poster-image"
                            :src="posterEndPoint + $store.getters.getMovieDetail.poster_path" 
                            :alt="$store.getters.getMovieDetail.title"
                    >
                </div>
                <div>
                    <button class="btn btn-primary" @click="displayVideo">Ver triller</button>
                </div>
                 <MovieVideo :id="$route.params.id"/>
            </div>
            <div class="background-image-content">
                <img 
                    class="background-image"
                    :src="posterEndPoint + $store.getters.getMovieDetail.backdrop_path"
                    :alt="$store.getters.getMovieDetail.title"
                >
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
                        <div v-for="(company, key) in this.$store.getters.getMovieDetail.production_companies" :key="key">
                            <img v-if="company.logo_path"
                                :src="posterEndPoint + company.logo_path" 
                                :alt="company.name"
                            >    
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="tab-container">
            <ul class="nav nav-tabs">
                <li class="nav-item" role="presentation">
                    <button 
                        class="nav-link active" 
                        id="pills-reviews-tab" 
                        data-bs-toggle="pill" 
                        data-bs-target="#pills-reviews" 
                        type="button" 
                        role="tab" 
                        aria-controls="pills-reviews" 
                        aria-selected="true">
                            Comentarios
                        </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button 
                        class="nav-link" 
                        id="pills-credits-tab" 
                        data-bs-toggle="pill" 
                        data-bs-target="#pills-credits" 
                        type="button" 
                        role="tab" 
                        aria-controls="pills-credits" 
                        aria-selected="false">
                            Protagonistas
                        </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button 
                        class="nav-link" 
                        id="pills-videos-tab" 
                        data-bs-toggle="pill" 
                        data-bs-target="#pills-videos" 
                        type="button" 
                        role="tab" 
                        aria-controls="pills-videos" 
                        aria-selected="false">
                            Videos
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button 
                        class="nav-link" 
                        id="pills-related-tab" 
                        data-bs-toggle="pill" 
                        data-bs-target="#pills-related" 
                        type="button" 
                        role="tab" 
                        aria-controls="pills-related" 
                        aria-selected="false">
                            Películas relacionadas
                        </button>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div 
                    class="tab-pane fade show active" id="pills-reviews" role="tabpanel" aria-labelledby="pills-reviews-tab">
                    <ReviewList/>
                </div>
                <div class="tab-pane fade" id="pills-credits" role="tabpanel" aria-labelledby="pills-credits-tab">
                    <Credits/>
                </div>
                <div class="tab-pane fade" id="pills-videos" role="tabpanel" aria-labelledby="pills-videos-tab">
                    <VideoList/>
                </div>
                <div class="tab-pane fade" id="pills-related" role="tabpanel" aria-labelledby="pills-related-tab">
                    <SimilarMovieList/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '../../components/header/header.vue'
    import MovieVideo from '../../components/movieVideo/movieVideo.vue'
    import ReviewList from '../../components/reviewList/reviewList.vue'
    import Credits from '../../components/credits/credits.vue'
    import VideoList from '../../components/videosList/videoList.vue'
    import SimilarMovieList from '../../components/similarMovieList/similarMovieList.vue'
    import { posterEndPoint } from '@/constants/js/constants'
    import { mapGetters } from 'vuex'
    

    export default {
        name: 'MovieDefault',

        data(){
            return {
                posterEndPoint,
                generos: [],
                productionCompanies: [],
                fechaLanzamiento: '',
            }
        },

        components:{
            Header,
            MovieVideo,
            ReviewList,
            Credits,
            VideoList,
            SimilarMovieList
        },

        props: {
            id: {type: String}
        },

        methods:{
            displayVideo(){
                this.$store.dispatch('visibilityVideoState', true)
            }
        },

        computed:{
            ...mapGetters(['getMovieDetail'])
        },

        watch:{
            getMovieDetail:function(){
                const genre = this.getMovieDetail.genres.map(g => g.name)
                this.generos = genre.length > 0 ? 'Género: ' + genre.join(', ') : ''
            }
        },

    }
</script>

<style lang="scss">
    @import './MovieDetailView.scss';
</style>