<template>
  <Header />
  <Vnetwork />
  <FileUpload :maxSize="999999" accept="" />
</template>

<script>
import Header from './components/Header.vue'
import Vnetwork from './components/Vnetwork.vue'
import FileUpload from './components/UploadFile.vue'

export default {
  name: 'App',
  components: {
    Header,
    Vnetwork,
    FileUpload
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
