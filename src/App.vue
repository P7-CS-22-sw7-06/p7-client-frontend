<template>
  <Header />
  <Vnetwork />
</template>

<script>
import Header from './components/Header.vue'
import Vnetwork from './components/Vnetwork.vue';

export default {
  name: 'App',
  components: {
    Header,
    Vnetwork
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0381ff;
  
  background-color: #292b2d;
} 

</style>
