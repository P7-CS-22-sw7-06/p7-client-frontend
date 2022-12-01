<template>
  <div class="file-upload">
    <input type="file" @change="onFileSelected" multiple="true" ref="file">
    <button @click="onUpload">Upload</button>
  </div>
</template>

  
  <script>
  export default {
    name: "FileUpload",
    props: {
    maxSize: {
      type: Number,
      default: 1000000,
      required: true,
    },
    accept: {
      type: String
    },
  },
  data () {
    return {
      isLoading: false,
      uploadReady: true,
      file: {
        name: "",
        size: 0,
        type: "",
        fileExtention: "",
        url: "",
        isUploaded: false,
        errors: [],
      },
    };
  },
  
  methods: {
    handleFileChange(e) {
      
      this.errors = [];
      // Check if file is selected
      if (e.target.files && e.target.files[0]) {
             // Check if file is valid
        if (this.isFileValid(e.target.files[0])) {
          // Get uploaded file
          const file = e.target.files[0],
            // Get file size
            fileSize = Math.round((file.size / 1024 / 1024) * 100) / 100,
            // Get file extention
            fileExtention = file.name.split(".").pop(),
            // Get file name
            fileName = file.name.split(".").shift();
          // Print to console
          console.log(fileSize, fileExtention, fileName);
        } else {
          console.log("Invalid file");
        }
      }
    },
      isFileSizeValid(fileSize) {
      if (fileSize <= this.maxSize) {
        console.log("File size is valid");
      } else {
          this.errors.push(`File size should be less than ${this.maxSize} MB`);
      }
    },
    isFileTypeValid(fileExtention) {
      if (this.accept.split(",").includes(fileExtention)) {
        console.log("File type is valid");
      } else {
        this.errors.push(`File type should be ${this.accept}`);
      }
    },
    onUpload() {
      console.log("Tickle me")
      const formData = new FormData();

      for( var i = 0; i < this.$refs.file.files.length; i++ ){
        let file = this.$refs.file.files[i];
        formData.append('files[' + i + ']', file);
        console.log("Tickle me")
        for (let obj of formData) {
          console.log(obj)
        }
    }
      // Hvor skal vi sende filen hen? 
    },
  },
   
  };
  </script>


  <style>
  .file-upload {
  height: 100vh;
  width: 100%;
  margin-top: 40px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.file-upload .file-upload__area {
  width: 200px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #ccc;
  margin-top: 40px;
} 
  .file-upload .file-upload__error {
    margin-top: 10px;
    color: #f00;
    font-size: 12px;
  }
  .file-upload .upload-preview {
    text-align: center;
  }
  .file-upload .upload-preview .file-extention {
    height: 100px;
    width: 100px;
    border-radius: 8px;
    background: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5em auto;
    font-size: 1.2em;
    padding: 1em;
    text-transform: uppercase;
    font-weight: 500;
  }
  .file-upload .upload-preview .file-name {
    font-size: 1.2em;
    font-weight: 500;
    color: #000;
    opacity: 0.5;
  }
  html, body {
  margin: 0;
  padding: 0;
} 
  </style>