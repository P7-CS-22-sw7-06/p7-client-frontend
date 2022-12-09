<template>
  <div id="nav">
    <router-link v-if="authenticated" to="/home" v-on:click="logout()" replace>Logout</router-link>
  </div>
  <router-view @authenticated="setAuthenticated" />
  <Header />
  <BodyText />
  <ToolTipComponent/>
  <Vnetwork />
  <FileUpload :maxSize="999999" accept="" />
</template>

<script>
import Header from './components/Header.vue'
import Vnetwork from './components/Vnetwork.vue'
import FileUpload from './components/UploadFile.vue'
import BodyText from './components/BodyText.vue'


export default {
  name: 'App',
  components: {
    Header,
    BodyText,
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

html, body {
  margin: 0;
  padding: 0;
  border: 0;
}
</style>
