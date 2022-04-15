<template>
    <div class="videocard-container">
        <div v-for="(item, key) in videoList.results" :key="key">
            <VideoCard :video="item"/>
        </div>
    </div>
</template>

<style lang="scss">
    @import './videoCard.scss';
</style>

<script>
    import { mapGetters } from 'vuex'
    import VideoCard from '../../components/videoCard/videoCrad.vue'

    export default {
        name: 'VideoListComponents',

        components:{
            VideoCard
        },

        computed:{
            ...mapGetters(['getMovieVideo'])
        },

        watch:{
            getMovieVideo:function(){
                this.videoList = this.getMovieVideo
            }
        },

        data(){
            return {
                videoList: {
                    id: 0,
                    results: []
                }
            }
        }
    
    }
</script>