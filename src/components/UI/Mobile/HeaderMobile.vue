<template>
  <nav class="block fixed inset-x-0 bottom-0 bg-white shadow z-50">
      <div class="flex justify-between">
        <router-link to="/map" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1 tab-button--mobile">
          <DocumentPictogram/>
          <span class="tab tab-home block text-xs">Map</span>
        </router-link>

        <router-link to="/About" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1 tab-button--mobile">
          <DocumentPictogram/>
          <span class="tab tab-home block text-xs">Posts</span>
        </router-link>
        <router-link to="/Settings" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1 tab-button--mobile">
          <SettingsPictogram/>
          <span class="tab tab-home block text-xs">Settings</span>
        </router-link>
      </div>
</nav>
</template>

<script>
import DocumentPictogram from '../../../assets/svg/DocumentPictogram.vue'
import SettingsPictogram from '../../../assets/svg/SettingsPictogram.vue'
export default {
  name: 'Header',
  props: {
  },
  data(){
    return{
    }
  },
  methods:{
  },
  components: {
      DocumentPictogram,
      SettingsPictogram,
  },
}
</script>
