<template>
  <Header/>
  <HeaderMobile/>
  <router-view/>
</template>
<script>
import Header from './components/UI/Header.vue'
import HeaderMobile from './components/UI/Mobile/HeaderMobile.vue'

export default {
  name: 'App',
  components: {
    Header,
    HeaderMobile
  },
  methods:{
    checkDevice(){
    },
  },
  mounted(){
    this.checkDevice();
    this.$store.dispatch('getPosts','http://localhost:6950/v1/posts');

  }
}
</script>
