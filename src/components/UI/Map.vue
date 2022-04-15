<template>
  <div class="w-2/3 z-40" id="mapContainer">
    <Loader class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
  </div>
</template>
<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Loader from '@/assets/svg/Loader'
import { mapState } from 'vuex';
export default {
  name: "LeafletMap",
  computed: mapState(['location']),
  components: {
      Loader,
  },
  data() {
    return {
        map: null,
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
    setPostsMarkers(posts){
      posts.forEach((item) => {
        if(item.gpsPositionLat && item.gpsPositionLong){
          L.circle([item.gpsPositionLat,item.gpsPositionLong],{radius: 5}).addTo(this.map);
        }
      })
    }

  },
  mounted() {
    this.posts = this.$store.state.currentPostList;
    this.$store.dispatch('currentLocation')
    .then(this.mapLoaded = true)
    .then(coordinates => {
    localStorage.setItem('coordinates', JSON.stringify(coordinates));
    this.map = L.map("mapContainer").setView([coordinates.lat,coordinates.long], 200);
    this.$store.subscribe((mutation)=>{
      if(mutation.type === "UPDATE_CURRENT_POSITION"){
        let postPosition = this.$store.state.currentPosition
        this.map.setView([postPosition.lat,postPosition.long], 200);
      }
    })
    this.setCurrentPositionMarker(coordinates);
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    }).addTo(this.map)
    .then(this.setPostsMarkers(this.posts))
    setInterval(function() {
      localStorage.setItem('coordinates', JSON.stringify(coordinates));
    })
    }, 60 * 1000);

  }
};
</script>
