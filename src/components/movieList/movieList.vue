<template>
    <div>
        <h2 class="titleSection"> {{ titleSection }} </h2>
        <div class="catalogo-container">
            <div v-for="(item, i) in $store.getters.getMoviesList.results" :key="i" class="movie-container">
                <MovieCard :data="item"/>
            </div>
        </div>
    </div>
</template>

<script>
    import MovieCard from '../../components/movieCard/movieCard.vue'
    import { getTopRated, getFindMovieByText } from '../../axios/moviesLists.js'
    import { mapGetters } from 'vuex'

    export default {
        name: 'MovieListComponent',

        components:{
         MovieCard   
        },

        data(){
            return {
                titleSection: 'Películas',
            }
        },

        mounted(){
            if(this.getFindText.length === 0){
                getTopRated(this.$store)
            }else{
                getFindMovieByText(this.$store, this.getFindText)
            }
        },

        computed:{
            ...mapGetters(['getFindText'])
        },
        
        watch:{
            getFindText:function(){
                this.titleSection = this.getFindText ? 'Resultado de la búsqueda'  : 'Películas'
            }
        }


    }
</script>

<style lang="scss">
    @import './movieList.scss';
</style>