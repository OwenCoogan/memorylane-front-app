<template>
  <div class="">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="handleSubmitPost">
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
    <button type="submit" class="bg-indigo-500">
    <Loader v-if="this.loading === true"/>
      <div v-if="this.loading ===false">
        <p v-if="this.message!=null">{this.message}</p>
        <p v-else>Submit</p>
      </div>
    </button>
  </form>
</div>
</template>

<script>
import axios from 'axios'
import Loader from '@/assets/svg/Loader'
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
    let currentPosition = this.$store.state.geolocation
    this.position = {
        gpsPositionLat:currentPosition.lat,
        gpsPositionLong:currentPosition.long,
    }
  },
  methods:{
    async handleSubmitPost(){
      this.loading = true;
      axios.post('http://localhost:6950/v1/post/create', {
          title:this.title,
          content:this.content,
          latitude:this.position.gpsPositionLat,
          longitude:this.position.gpsPositionLong,
          userId:this.$store.state.auth.user.id
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
