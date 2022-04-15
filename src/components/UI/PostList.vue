<template>
  <div class="w-1/3 post-list--container">
    <h2 class="text-xl text-center">Vos posts</h2>
    <div class="postlist">
      <li v-for="post in posts" :key="post.title">
        <PostCard
        :title="post.title"
        :id="post.id"
        :img="post.images"
        :description="post.content"
        :tags="post.tags"
        :lat="post.latitude"
        :long="post.longitude"
        />
      </li>
    </div>
    <CreatePostForm v-if="this.formPostCreateShown === true "/>
    <button @click="toggleForm()" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block m-auto">
    <p v-if="this.formPostCreateShown === false">Create a Post</p>
    <p v-else >X</p>

    </button>
  </div>
</template>
<script>
import PostCard from '@/components/UI/PostCard'
import CreatePostForm from '@/components/UI/Form/PostForm'
export default {
  name: 'PostList',
  props: {
  },
  components:{
    PostCard,
    CreatePostForm
  },
  data(){
    return{
      posts:null,
      formPostCreateShown:false,
    }
  },
  mounted(){
    this.posts = this.$store.state.currentPostList.reverse();
  },
  methods:{
    toggleForm(){
      this.formPostCreateShown = !this.formPostCreateShown;
    }
  }
}
</script>
