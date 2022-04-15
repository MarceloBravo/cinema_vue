<template>
    <div class="videocard-container">
        <iframe v-if="video.key.length > 0" 
            width="361" 
            height="200" 
            :src="'https://www.youtube.com/embed/' + video.key" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    </div>
</template>

<style lang="scss">
    @import './videoCard.scss';
</style>

<script>
    export default {
        name: 'VideoCardComponent',

        props: {
            video: {
                    id: "",
                    iso_639_1: "",
                    iso_3166_1: "",
                    key: "",
                    name: "",
                    official: false,
                    published_at: "",
                    site: "",
                    size: 1080
                }
        }
    }
</script>