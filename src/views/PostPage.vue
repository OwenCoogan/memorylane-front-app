<template>
  <div class="container pt-4 pb-12">
        <Loader v-if="this.isLoading === true" />
        <div v-if="this.isLoading === false">
          <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800" v-bind:post="post?.title">{{ post.title ? post.title : "Your Title"}}</h1>
          <div class="w-full mb-4">
            <div class="mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t">
            <p>{{post.content}}</p>
            </div>
          </div>
          <div class="w-full mb-4  max-w-4xl mx-auto">
            <div class="grid grid-cols-4 gap-4" v-if="post.images">
              <img v-for="image in post.images" :src="`http://localhost:6950/resources/static/assets/uploads/post/${image.name}`"  v-bind:key="image.name" />
            </div>
          <UploadImageForm :id="this.$route.params.id"/>
          </div>
        </div>
      </div>
</template>

<script>
import Loader from '@/assets/svg/Loader'
import axios from 'axios'
import UploadImageForm from '../components/UI/Form/UploadImageForm.vue'
export default {
  name: 'PostPage',

  props: {
    'id': {
      type: String,
      required: true
    }
  },
  components: {
      Loader,
      UploadImageForm,
  },
  data(){
    return{
      post:null,
      file:null,
      isLoading:true
    }
  },
  mounted(){
    this.getPost(`http://localhost:6950/v1/posts/${this.$route.params.id}`)

  },
  methods:{
    async getPost(url){
        await axios.get(url)
        .then( res => this.post = res.data.data)
        .then(this.isLoading = false)
    }
  }
}
</script>
