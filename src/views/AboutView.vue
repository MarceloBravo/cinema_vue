<template>
  <div class="about">
    <Header/>
    <div class="container-about">
      <h1>Acerca de...</h1>
      <h3>Desarrollado con: </h3>
      <div class="row">
        <div class="col-md-3 offset-md-1">
          <img src="../../public/img/vue.png" alt="VueJs">
        </div>
        <div class="col-md-7">
          Vue.js es un framework de JavaScript de código abierto para la construcción de 
          interfaces de usuario y aplicaciones de una sola página. Fue creado por Evan You, 
          y es mantenido por él y por el resto de los miembros activos del equipo central 
          que provienen de diversas empresas como Netlify y Netguru.
        </div>
      </div>
      <div>
        <p class="created-by">Desarrollado por Marcelo A. Bravo C</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import '../style/views/aboutView.scss';
</style>

<script>
  import Header from '../components/header/header.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'AboutViewComponent',

    components:{
      Header
    },

    data(){
      return{
        textoBusqueda: ''
      }
    },

  computed:{
    ...mapGetters(['getFindText'])
  },


  }
</script>
