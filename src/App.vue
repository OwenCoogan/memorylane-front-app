<template>
<div class="dark:bg-slate-900 dark:text-white h-screen">
  <Header style="height:10vh"/>
  <router-view tyle="height:90vh"/>
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
    checkTheme(){
      const theme = localStorage.getItem('color-theme')
      if(theme){
        document.documentElement.classList.add(theme);
      }
      else{
        localStorage.setItem('color-theme','dark');
        document.documentElement.classList.add('dark');
      }
    }
  },
  mounted(){
    this.checkDevice();
    this.checkTheme();
  }
}
</script>
