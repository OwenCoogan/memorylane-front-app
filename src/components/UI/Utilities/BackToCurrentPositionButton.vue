<template>
  <button class="dark:bg-gray-900 bg-teal-500 hover:bg-teal-700 hover:dark:bg-gray-700 text-white font-bold flex w-full text-center" @click="BackToUserPosition()" :disabled="userPositionActive===true">
    <p class="px-3">Current Position</p>
    <GeolocPinPicto class="w-6 inline-block"/>
  </button>
</template>

<script>
import { useGeolocationStore } from '../../../stores/geolocation';
import GeolocPinPicto from '../../../assets/svg/GeolocPinPicto.vue'

const geolocationStore = useGeolocationStore()
export default {
  name: 'BackToCurrentPositionButton',
  props: {
    lat: {
      type: Number
    },
    long:{
      type: Number
    },
  },
  components: {
    GeolocPinPicto
  },
  data(){
    return{
      position:null,
      userPositionActive:geolocationStore.activeGeolocation
    }
  },
  mounted(){
    this.position
  },
  methods:{
    async BackToUserPosition(lat,long){
      geolocationStore.$patch({
        currentMarkerPosition:{
          latitude : lat,
          longitude : long,
        },
        activeGeolocation:true,
      })
    }
  }
}
</script>
