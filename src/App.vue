<template>
  <router-view/>
  <ErrorHandlerVue/>
</template>

<style lang="scss">
@import 'https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css';
@import './constants/style/constants.scss';

html{
  background: #080514;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: $backgroundColor;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
  import ErrorHandlerVue from "./components/errorHandler/errorHandler.vue";

  export default {
    name: 'App',

    components:{
      ErrorHandlerVue
    }
  }
</script>