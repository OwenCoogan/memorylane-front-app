<template>
  <form
  class="mt-7"
  :action="'localhost:6950/v1/posts/upload/${post._id}'"
  enctype="multipart/form-data"
  method="POST"
  @submit="submitImage"
  >
    <input type="text" name="content"/>
    <input type="submit" value="Upload Photo"/>
  </form>
  <p style="color:red" v-if="this.error !=null">{{this.error}}</p>
  <p style="color:green" v-if="this.message !=null">{{this.message}}</p>
</template>
<script>
import axios from 'axios'
export default {
  name: 'UploadImageForm',
  data(){
    return{
      content:null,
      message:null,
      error:null,
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
    async submitComment(){
      let data = {
        content:this.content,
        postId:this.id,
        userId:this.$store.state.user.id
      }
      await axios.post(`http://localhost:6950/upload/post/${this.id}/comment/add/`, data)
      .then(res => this.message = res.data)
      .catch(err => this.message = err.data)
    }
  }
}
</script>
