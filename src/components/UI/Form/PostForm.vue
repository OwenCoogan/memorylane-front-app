<template>
  <div>
    <div class="relative p-4 w-1/2 h-full block m-auto">
        <div class="">
          <h2 class="text-xl">Add a New Post</h2>
                  <form class="bg-white dark:bg-slate-900 shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="handleSubmitPost">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
              Title
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Titre" v-model="this.title">
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="desc">
              Description
            </label>
            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="desc" type="textarea" placeholder="Description here" v-model="this.content">
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="desc">
              Position
            </label>
            <div class="position-container">
              <span>Latitude</span>
              <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="desc" type="textarea" v-model="this.position.gpsPositionLat">
            </div>
            <div class="position-container">
              <span>Longitude</span>
              <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="desc" type="textarea" v-model="this.position.gpsPositionLong">
            </div>
          </div>
          <SuccessMessage class="m-t-2" v-if="this.error ===null && this.message !=null" :message="this.message" />
          <ErrorMessage class="m-t-2" v-if="this.message ===null && this.error !=null" :message="this.error" />
          <button type="submit" class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
            <Loader v-if="this.loading === true"/>
              <p v-if="this.loading ===false">Submit</p>
          </button>
        </form>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import Loader from '@/assets/svg/Loader.vue'
import SuccessMessage from '../Utilities/ValidationMessages/SuccessMessage.vue'
import ErrorMessage from '../Utilities/ValidationMessages/ErrorMessage.vue'
import { useGeolocationStore } from '../../../stores/geolocation';
const geolocationStore = useGeolocationStore()
import { useUsersStore } from '../../../stores/users';
const UsersStore = useUsersStore()
export default {
  name: 'CreatePostForm',
  props: {
  },
  components:{
    Loader,
    SuccessMessage,
    ErrorMessage,
  },
  data(){
    return{
      title:null,
      content:null,
      loading:false,
      position:{
        gpsPositionLat:null,
        gpsPositionLong:null
      }

    }
  },
  mounted(){
    let currentPosition = geolocationStore.currentMarkerPosition;
    this.position = {
        gpsPositionLat:currentPosition.latitude,
        gpsPositionLong:currentPosition.longitude,
    }
  },
  methods:{
    async handleSubmitPost(){
      this.loading = true;
      axios.post(`${import.meta.env.VITE_API_URL}/v1/post/create`, {
          title:this.title,
          content:this.content,
          userId:UsersStore.getAuth.user.id,
          latitude:this.position.gpsPositionLat,
          longitude:this.position.gpsPositionLong,
      })
      .then(res =>{
        this.loading = false;
        this.message = 'you have successfully created a post';
      })
      .catch(err =>{
        this.message = err;
      });
    }
  }
}
</script>
