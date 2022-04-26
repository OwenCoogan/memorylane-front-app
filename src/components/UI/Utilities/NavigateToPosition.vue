<template>
  <button @click="switchPosition(lat,long)">
    Go to Point
  </button>
</template>

<script>
import { useGeolocationStore } from '../../../stores/geolocation';
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
