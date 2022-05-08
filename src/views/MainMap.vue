<template>
  <div  v-if="geolocationAllowed ===true" class="lg:flex">
    <PostList class="hidden md:block"/>
    <Map/>
    <PostListMobile class="block md:hidden"/>

  </div>
  <div v-else>
    Allow Geolocation Please
    <button @click="allowGeolocation">Allow</button>
  </div>
</template>

<script>
import Map from '@/components/UI/Map.vue'
import PostList from '@/components/UI/PostList.vue'
import PostListMobile from '@/components/UI/Utilities/SliderPostMobile.vue'
import { usePostsStore } from '../stores/posts';
const postStore = usePostsStore()

import { useGeolocationStore } from '../stores/geolocation';
const geolocationStore = useGeolocationStore()

export default {
  name: "LeafletMap",
  components: {
      Map,
      PostList,
      PostListMobile,
  },
  data() {
    return {
        device : "dev",
        geolocationAllowed:geolocationStore.getPermissionStatus,
    };
  },
  created() {
  },
  methods:{
    async allowGeolocation(){
      await geolocationStore.initCurrentPosition()
      .then(
      this.geolocationAllowed = true,
      postStore.getPosts()
      )
    }
  }
};
</script>
