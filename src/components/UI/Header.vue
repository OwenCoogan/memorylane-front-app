<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-black mr-6">
      <!--Logo -->
      Memory Lane
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto" v-bind:class="{ 'hidden' : mobileMenuOpen === false }">
      <div class="text-sm lg:flex-grow">
        <router-link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-underline mr-4">
          Home
        </router-link>
        <router-link to="/map" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-underline  mr-4">
          Map
        </router-link>
        <router-link to="/About" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-underline   ">
          About
        </router-link>
      </div>
      <div>
        <a v-on:click="this.mobileMenuOpen=!mobileMenuOpen" class=" inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
      </div>
      <logout-button/>
    </div>
</nav>
</template>

<script>
import LogoutButton from './LogoutButton.vue'
export default {
  name: 'Header',
  props: {
  },
  components:{
    LogoutButton

  },
  data(){
    return{
      mobileMenuOpen:false
    }
  },
  methods:{
    toggleMenu(){
      this.mobileMenuOpen = !this.mobileMenuOpen
    }
  }
}
</script>
