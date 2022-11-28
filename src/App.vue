<template>
  <Header />
  <ToolTipComponent/>
  <Vnetwork />
  <FileUpload :maxSize="999999" accept="" />
</template>

<script>
import Header from './components/Header.vue'
import Vnetwork from './components/Vnetwork.vue'
import FileUpload from './components/UploadFile.vue'
import ToolTipComponent from './components/ToolTip.vue'


export default {
  name: 'App',
  components: {
    Header,
    ToolTipComponent,
    Vnetwork,
    FileUpload
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0381ff;
  
  background-image: linear-gradient(rgb(45, 45, 42), rgb(86, 82, 82));
} 
</style>
