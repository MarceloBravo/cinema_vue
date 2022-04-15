<template>
    <div v-if="review.author" class="row">
        <div class="col-dm-12 col-md-2">
            <img v-if="review.author_details.avatar_path" :src="getUrlAvatar(review.author_details.avatar_path)" alt="Avatar">
        </div>
        <div class="col-sm-12 col-md-10 review-text">
            <h3>{{ review.author }}</h3>
            <p>{{ review.content }}</p>
        </div>
    </div>
</template>

<style lang="scss">
    @import './reviewCard.scss';
</style>

<script>
    import { posterEndPoint } from '../../constants/js/constants'

    export default {
        name: 'ReviewCardComponent',

        props: {
            review:{
                    author: "",
                    author_details: {
                            name: "",
                            username: "",
                            avatar_path: "",
                            rating: null
                        },
                        content: "",
                        created_at: "",
                        id: "",
                        updated_at: "",
                        url: ""
                    }
        },

        methods: {
          getUrlAvatar(url){
              if(!url)return ''
              const imgUrl = url.includes('www') || url.includes('http') ? url : this.posterEndPoint + url
              return imgUrl.substr(0,1) === '/' ? imgUrl.substr(1) : imgUrl
          }  
        },

        data(){
            return {
                posterEndPoint
            }
        },

        
    }
</script>