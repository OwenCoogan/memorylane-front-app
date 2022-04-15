<template>
  <div class="flex">
    <PostList/>
    <Map/>
  </div>
</template>

<script>
import Map from '@/components/UI/Map.vue'
import PostList from '@/components/UI/PostList.vue'
import { useGeolocationStore } from '../stores/geolocation';
import { usePostsStore } from '../stores/posts';
const geolocationStore = useGeolocationStore()
const postStore = usePostsStore()

export default {
  name: "LeafletMap",
  components: {
      Map,
      PostList,
  },
  data() {
    return {
        device : "dev",
    };
  },
  created() {
    postStore.getPosts()
  }
};
</script>
