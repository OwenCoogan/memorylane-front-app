<template>
  <button @click="switchPosition(lat,long)">
    <p class="w-3/4 inline-block">Go to Point</p>
    <GeolocPinPicto class="w-4 inline-block"/>
  </button>
</template>

<script>
import { useGeolocationStore } from '../../../stores/geolocation';
import GeolocPinPicto from '../../../assets/svg/GeolocPinPicto.vue'
const geolocationStore = useGeolocationStore()
export default {
  name: 'SwitchPosition',
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
      position:null
    }
  },
  mounted(){
    this.position
  },
  methods:{
    async switchPosition(lat,long){
      geolocationStore.$patch({
        currentMarkerPosition:{
          latitude : lat,
          longitude : long,

        },
        activeGeolocation:false,
      })
    }
  }
}
</script>
