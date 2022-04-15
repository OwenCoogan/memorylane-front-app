<template>
  <form
  class="mt-7"
  :action="'localhost:6950/v1/posts/upload/${post._id}'"
  enctype="multipart/form-data"
  method="POST"
  @submit="submitImage"
  >
    <input type="file" name="myImage" accept="image/*" @change="this.onFilePicked"/>
    <input type="submit" value="Upload Photo"/>
  </form>
  <p style="color:red" v-if="this.message !=null">{{this.message}}</p>
</template>
<script>
import axios from 'axios'
export default {
  name: 'UploadImageForm',
  data(){
    return{
      message:null,
    }
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components:{


  },
  methods:{
    onFilePicked (event) {
      const files = event.target.files
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    },
    async submitImage(e){
      e.preventDefault();
      const formData = new FormData();
      formData.append('file',this.image);
      await axios.post(`http://localhost:6950/upload/post/${this.id}/image/add/`,formData)
      .then(res => this.message = res.data)
      .catch(err => this.message = err.data)
    }
  }
}
</script>
