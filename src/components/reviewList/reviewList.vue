<template>
    <div class="row">
        <div v-for="(item, key) in reviews.results" :key="key" class="reviews-list-container">
            <ReviewCard :review="item"/>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ReviewCard from '../reviewCard/reviewCard.vue'

export default {
    name: 'ReviewListComponent',

    components:{
        ReviewCard
    },

    watch:{
        getReviews:function(){
            this.reviews = this.getReviews
        }
    },

    computed:{
        ...mapGetters(['getReviews'])
    },

    data(){
        return {
            reviews:{
                id: null,
                page: 0,
                total_pages: 0,
                total_results: 0,
                results: []
            }
        }
    }    
}
</script>