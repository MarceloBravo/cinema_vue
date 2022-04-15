<template>
    <div v-if="error && error.message" class="modal-container">
        <div class="background-modal"></div>
        
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Error</h5>
                        <button type="button" class="close" aria-label="Close" @click="closeModal">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        {{ error.message }}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="closeModal">Aceptar</button>
                    </div>
                </div>
            </div>
        </div>

</template>

<style lang="scss">
    @import './errorHandlers.scss';
</style>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'ErrorHandlerComponent',

        computed:{
            ...mapGetters(['getError'])
        },

        watch:{
            getError:function(){
                this.error = this.getError
            }
        },

        methods:{
            closeModal(){
                this.$store.dispatch('errorHandler', null)
            }
        },

        data(){
            return {
                error: null
            }
        }



    }
</script>