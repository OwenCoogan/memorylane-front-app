<template>
  <div class="w-1/3 h-screen">
  <div class="list-header w-1-3 ">
    <h2 class="text-xl text-center my-6">Vos posts</h2>
    <input type="range" style="width: 80%;
    margin: auto;
    display: block;" min="1" max="100" class="w-full h-2 bg-teal-100 appearance-none" v-model="range" @change="this.getPosts(this.range)">
    <div class="flex">
      <BackToCurrentPositionButton class=" text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-teal-800 block m-auto" style="z-index:9999"/>
      <CreatePostForm v-if="this.formPostCreateShown === true "/>
      <button @click="toggleForm()" class="my-6 text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-teal-800 block m-auto">
      <p v-if="this.formPostCreateShown === false">Create a Post</p>
      <p v-else >X</p>
      </button>
    </div>
  </div>
    <ul class="postlist post-list--container">
      <li v-for="post in posts" :key="post.title">
        <PostCard
        :title="post.title"
        :id="post.id"
        :img="post.images"
        :description="post.content"
        :tags="post.tags"
        :lat="post.latitude"
        :long="post.longitude"
        :author="post.author"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import PostCard from '@/components/UI/PostCard.vue'
import CreatePostForm from '@/components/UI/Form/PostForm.vue'
import BackToCurrentPositionButton from '@/components/UI/Utilities/BackToCurrentPositionButton.vue';
import { useGeolocationStore } from '../../stores/geolocation';
import { usePostsStore } from '../../stores/posts'
const postStore = usePostsStore()
const geolocationStore = useGeolocationStore()
export default {
  name: 'PostList',
  props: {
  },
  components:{
    PostCard,
    CreatePostForm,
    BackToCurrentPositionButton
  },
  data(){
    return{
      posts:null,
      formPostCreateShown:false,
      loading:false
    }
  },
  mounted(){
    this.posts = postStore.posts;
    geolocationStore.$subscribe((mutation) => {
        this.getPosts(this.range);
    })
  },
  methods:{
    toggleForm(){
      this.formPostCreateShown = !this.formPostCreateShown;
    },
    async getPosts(req,res){
      await postStore.getPosts(this.range)
      .then(this.posts = postStore.posts)
      .then(this.loading = false)
    },
  }
}
</script>
