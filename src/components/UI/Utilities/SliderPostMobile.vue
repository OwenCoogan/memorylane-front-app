<template>
  <div class="grid m-0  grid-cols-1  space-x-0.5 overflow-x-scroll flex justify-center items-center w-full h-96">
		<!--Card 1-->
		<PostCardMobile v-for="post in posts" :key="post.title"
        :title="post.title"
        :id="post.id"
        :img="post.images"
        :description="post.content"
        :tags="post.tags"
        :lat="post.latitude"
        :long="post.longitude"
        :author="post.author"
        />
	</div>
</template>
<script>
import PostCardMobile from '@/components/UI/PostCardMobile.vue'
import { useGeolocationStore } from '../../../stores/geolocation';
import { usePostsStore } from '../../../stores/posts'
const postStore = usePostsStore()
const geolocationStore = useGeolocationStore()
export default {
  name: 'PostList',
  props: {
  },
  components:{
    PostCardMobile,
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


