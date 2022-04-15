import { mapGetters } from 'vuex';
<template>
    <div class="credits-container">
        <div v-for="(item, key) in credits.cast" :key="key" class="credits-item">
            <img  v-if="item.profile_path" :src="posterEndPoint + item.profile_path" alt="Foto" :title="item.character">
            <div v-else class="no-photo"></div>
            <p>{{ item.name }}</p>
            <p>{{ item.character }}</p>
        </div>
    </div>
</template>

<style lang="scss">
    @import './credits.scss';
</style>

<script>
    import { posterEndPoint } from '../../constants/js/constants'
    import { mapGetters } from "vuex"

    export default {
        name: 'CreditsComponents',

        computed:{
            ...mapGetters(['getCredits'])
        },

        watch:{
            getCredits:function(){
                this.credits = this.getCredits
            }
        },

        data(){
            return {
                credits: {
                    id: null,
                    cast: []
                },
                posterEndPoint
            }
        }
    }
</script>