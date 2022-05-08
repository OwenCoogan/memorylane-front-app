<template>
  <div>
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white dark:bg-slate-900 rounded-lg shadow dark:bg-gray-700">
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
        <input>
      </div>
      <div class="position-container">
        <span>Longitude</span>
        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="desc" type="textarea" v-model="this.position.gpsPositionLong">
      </div>
    </div>
    <button type="submit" class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
    <Loader v-if="this.loading === true"/>
      <div v-if="this.loading ===false">
        <p v-if="this.message!=null">{this.message}</p>
        <p v-else>Submit</p>
      </div>
    </button>
  </form>
            <!-- Modal footer -->
            <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button data-modal-toggle="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button data-modal-toggle="defaultModal" type="button" class="text-gray-500 bg-white dark:bg-slate-900 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import Loader from '@/assets/svg/Loader.vue'
import { useGeolocationStore } from '../../../stores/geolocation';
const geolocationStore = useGeolocationStore()
import { useUsersStore } from '../../../stores/users';
const UsersStore = useUsersStore()
export default {
  name: 'CreatePostForm',
  props: {
  },
  components:{
    Loader
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

      .then(this.loading = false)
      .then(location.reload())
      .catch(err =>{
        this.message = err;
      });
    }
  }
}
</script>
