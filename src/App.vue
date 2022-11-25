<template>
  <Header />
  <Vnetwork />
  <div>
    <div>
    <FileUpload :maxSize="5" accept="py" />
  </div>
    <div v-show="showFileSelect">
      <FileUpload :maxSize="1" accept="py" @file-uploaded="getUploadedData" />
    </div>

    <div v-if="fileSelected">
      Successfully Selected file: {{ file.name }}.{{ file.fileExtention }}
    </div>
  </div>
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
  },
  data() {
    return {
      file: {},
      fileSelected: false,
      showFileSelect: false,
    };
  },
  methods: {
    getUploadedData(file) {
      this.fileSelected = true;
      this.showFileSelect = false;
      this.file = file;
    },
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
  
  background-color: #292b2d;
} 
</style>
