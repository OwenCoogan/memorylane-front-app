<template>
  <div class="lg:w-1/2 lg:h-5/6 z-40 h-2/6 m-auto" id="mapContainer">
    <Loader class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
  </div>
</template>
<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Loader from '@/assets/svg/Loader.vue';

import { useGeolocationStore } from '../../stores/geolocation';
import { usePostsStore } from '../../stores/posts';
const geolocationStore = useGeolocationStore()
const postStore = usePostsStore()
export default {
  name: "LeafletMap",
  components: {
      Loader,
  },
  setup() {
    return postStore
  },
  data() {
    return {
        map: null,
        currentPosition: null,
        mapLoaded:false,
        posts: null,
    };
  },
  created() {

  },
  methods:{
    setCurrentPositionMarker(coordinates){
      this.currentMarker = L.circle([coordinates.lat,coordinates.long],{radius: 5}).addTo(this.map);
    },
  },
  async mounted() {
    this.posts = postStore.posts
    if(geolocationStore.currentLocationMarker){
      this.setCurrentPositionMarker(geolocationStore.currentLocationMarker)
    }
    else{
      await geolocationStore.initCurrentPosition()
      .then(this.mapLoaded = true)
      .then(coordinates => {
      localStorage.setItem('coordinates', JSON.stringify(coordinates));
      this.map = L.map("mapContainer").setView([coordinates.lat,coordinates.long], 200);
      this.setCurrentPositionMarker(coordinates);


      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);


      setInterval(function() {
        geolocationStore.setCurrentPosition()
      })
      }, 60 * 1000);
    }
    geolocationStore.$subscribe((mutation) => {
        if(geolocationStore.activeGeolocation === false){
        this.map.setView([mutation.payload.currentMarkerPosition.latitude,mutation.payload.currentMarkerPosition.longitude], 200);
        }
    })
  }
};
</script>
