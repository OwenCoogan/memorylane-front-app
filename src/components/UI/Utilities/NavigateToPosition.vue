<template>
  <button @click="switchPosition(lat,long)">
    Go to Point
  </button>
</template>

<script>
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
        lat : lat,
        long : long
      }
      this.$store.dispatch('navigateToPostPoint',payload)
    }
  }
}
</script>
