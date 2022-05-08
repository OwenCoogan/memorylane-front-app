<template>
<div class="dark:bg-black dark:text-white">
  <Header/>
  <router-view />
  </div>
</template>
<script>
import Header from '@/components/UI/Header.vue'
import HeaderMobile from '@/components/UI/Mobile/HeaderMobile.vue'

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
  }
}
</script>
