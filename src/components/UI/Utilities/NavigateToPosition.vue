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
    switchPosition(lat,long){
      const payload = {
        latitude : lat,
        longitude : long
      }
     geolocationStore.switchCurrentPosition(payload)
    }
  }
}
</script>
