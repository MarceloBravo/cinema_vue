<template>
    <nav :class="'navbar navbar-expand-lg navbar-light ' + (windowTop ? '' : 'scrollIsNotOnTop')">
        <div class="container-fluid">
            <img src="../../assets/logo.png" alt="Logo Vue">
            <router-link class="navbar-brand" to="/">Cinema</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/">Inicio</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">Acerca de...</router-link>
                </li>
                <!--
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Películas
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Más populares</a></li>
                        <li><a class="dropdown-item" href="#">Estrenos</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Todas</a></li>
                    </ul>
                </li>
                -->
            </ul>
            <form class="d-flex">
                <div class="search-content">
                    <input class="form-control me-2 input-search" type="text" placeholder="Buscar" v-model="textoBusqueda"  @keypress.enter="findMovieByText">
                    <i class='bx bx-search-alt-2'></i>
                </div>
                <button class="btn btn-outline-primary" type="button" @click="findMovieByText">Buscar</button>
            </form>
            </div>
        </div>
    </nav>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { getFindMovieByText, getTopRated } from '../../axios/moviesLists.js'

    export default {
    name: 'HeaderComponent',

    data(){
        return {
            textoBusqueda: '',
            windowTop: true,
        }
    },

    mounted(){
        window.addEventListener('scroll', this.handlerScroll)
        this.textoBusqueda = this.getFindText 
        this.handlerScroll = this.onScroll
    },

    beforeUnmount() {
        window.removeEventListener('scroll', this.handlerScroll)
    },

    computed:{
        ...mapGetters(['getFindText'])
    },

    watch:{
        getFindText:function(){
            this.textoBusqueda = this.getFindText
            if(this.$router.currentRoute._value.fullPath !== '/'){
                this.$router.push('/')       
            }
        },
    },

    props:{
        appTitle: {type: String}
    },

    methods:{
        findMovieByText($event){
            $event.preventDefault()
            if(this.textoBusqueda.trim().length > 0){
                getFindMovieByText(this.$store, this.textoBusqueda)
            }else{
                getTopRated(this.$store)
            }
        },

        handlerScroll(e) {
            this.windowTop = window.top.scrollY === 0 || e.target.documentElement.scrollTop === 0
        },
        
    }
}
</script>

<style lang="scss">
    @import './header.scss';
</style>

