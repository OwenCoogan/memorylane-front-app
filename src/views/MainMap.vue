<template>
  <div  v-if="geolocationAllowed ===true" class="lg:flex">
    <PostList class="hidden md:block"/>
    <Map/>
    <PostListMobile class="block md:hidden"/>
  </div>
  <div v-else>
    <div>
        <div class="m-auto relative p-4 w-full max-w-md h-full md:h-auto">
            <div class="relative bg-white dark:bg-slate-900 rounded-lg shadow dark:bg-gray-700">
                <div class="p-6 text-center">
                    <svg class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">For this application to work at its best, you must allow geolocation</h3>
                    <button  @click="allowGeolocation" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                        Allow Geolocation
                    </button>
                </div>
            </div>
        </div>
    </div>
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
        geolocationAllowed:null,
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
