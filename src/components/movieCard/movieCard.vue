<template>
    <div :id="'div-'+data.id">
        <img 
            :src="posterEndPoint+data.poster_path" 
            :alt="data.title" 
            data-bs-container="body" 
            data-bs-toggle="popover" 
            data-bs-placement="right"
            data-bs-content="Right popover"
            @click="movieDetail(data.id)"
        >
    </div>
</template>

<script>
    import { posterEndPoint } from "@/constants/js/constants"

    export default {
        name: 'MovieCardComponent',

        data(){
            return {
                posterEndPoint
            }
        },
        
        props:{ 
            data: {
                movie: {type: String},
                adult: {type: Boolean},
                backdrop_path: {type: String},
                genre_ids: {type: Array},
                id: {type: Number},
                original_language: {type: String},
                original_title: {type: String},
                overview: {type: String},
                popularity: {type: Number},
                poster_path: {type: String},
                release_date: {type: String},
                title: {type: String},
                video: {type: Boolean},
                vote_average: {type: Number},
                vote_count: {type: Number}
            }
        },

        methods: {
            movieDetail(id){
                this.$router.push('/movie-detail/' + id)
            }
        },


    }
</script>

<style lang="scss">
    @import './movieCard.scss';
</style>