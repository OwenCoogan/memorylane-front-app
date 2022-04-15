<template>
  <div class="flex">
    <PostList v-if="this.device !='Mobile'"/>
    <PostListMobile v-else/>
    <Map/>
  </div>
</template>

<script>
import Map from '@/components/UI/Map'
import PostList from '@/components/UI/PostList'
import PostListMobile from '@/components/UI/Mobile/PostListMobile'
export default {
  name: "LeafletMap",
  components: {
      Map,
      PostList,
      PostListMobile
  },
  data() {
    return {
        posts: [],
        device : this.$store.state.device,
    };
  },
  created() {
  }
};
</script>
