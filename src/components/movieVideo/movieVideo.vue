<template>
    <div v-if="showVideo" class="video-container-component">
        <div class="background-video-modal"></div>

        <div class="div-video">
            <i class='bx bxs-x-circle bx-md' title="Cerrar" @click="hideVideo"></i>
            <iframe v-if="videos.length > 0" 
                width="713" 
                height="401" 
                :src="'https://www.youtube.com/embed/' + videos[0].key" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>

        </div>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { youtubeEndPoint } from '../../global/constants.js'
    import { getMovieVideo } from '../../axios/movieDetail.js'

    export default {    
        name: 'MovieVideoComponent',

        props:{
            idVideo: {type: String},
        },

        computed:{
            ...mapGetters(['getMovieVideo','getVisibilityVideoState'])
        },

        watch:{
            '[store, id]':function(){ 
                if(this.store && this.id !== undefined){

                    getMovieVideo(this.store, this.id)
                }
            },

            getMovieVideo:function(){
                this.videos = this.getMovieVideo.results.filter(v => v.type === 'Trailer')
            }, 

            getVisibilityVideoState:function(){
                this.showVideo = this.getVisibilityVideoState
            }
        },

        methods:{
            hideVideo(){
                this.$store.dispatch('visibilityVideoState', false)
            }
        },

        mounted(){
          this.store = this.$store
        },

        data(){
            return {
                youtubeEndPoint,
                store: null,
                videos: [],
                showVideo: false
            }
        },

        
    }
</script>

<style lang="scss">
    @import './movieVideo.scss';
    
</style>