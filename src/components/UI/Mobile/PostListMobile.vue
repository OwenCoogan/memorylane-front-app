<template>
  <div class="post-list--mobile absolute left-1/2 transform -translate-x-1/2 z-50">
    <h2 class="text-xl text-center">Vos posts</h2>
    <agile class="postlist">
      <div v-for="post in posts" :key="post.title">
        <PostCardMobile
        :title="post.title"
        :id="post._id"
        :img="post.image"
        :description="post.content"
        :tags="post.tags"
        :lat="post.gpsPositionLat"
        :long="post.gpsPositionLong"
        />
      </div>
    </agile>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile'
import PostCardMobile from '@/components/UI/Mobile/PostCardMobile'
import 'vueperslides/dist/vueperslides.css'
export default {
  name: 'PostList',
  props: {
  },
  components: {
    agile: VueAgile,
    PostCardMobile
  },
  data(){
    return{
      posts:null
    }
  },
  mounted(){
    this.posts = this.$store.state.currentPostList;
  },
  methods:{
  }
}
</script>
