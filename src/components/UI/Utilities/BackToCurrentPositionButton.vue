<template>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click="BackToUserPosition()" :disabled="userPositionActive===true">
    <GeolocPinPicto class="w-full inline-block"/>
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
