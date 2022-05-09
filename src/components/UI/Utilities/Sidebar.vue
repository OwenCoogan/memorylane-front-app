<template>
  <aside class="w-64" aria-label="Sidebar">
   <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800" style="height:90vh">
      <ul class="space-y-2">
          <li>

            <BackToCurrentPositionButton class=" text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-teal-800 block m-auto" style="z-index:9999"/>
          </li>
         <li>
            <router-link to="/createPost" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">

               <span class="ml-3">Create New Post</span>
            </router-link>
         </li>
         <li>
            <router-link to="/" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">

               <span class="ml-3">Home</span>
            </router-link>
         </li>
         <li>
            <router-link :to="`/userProfile/${this.user.id}`" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">

               <svg  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>

               <span class="ml-3">{{this.user.name}}</span>
            </router-link>
         </li>
      </ul>
      <ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
         <li>
            <a to="https://github.com/OwenCoogan/api_memlane_v3/blob/main/README.md" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
               <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
               <span class="ml-3">Documentation</span>
            </a>
         </li>
         <li>
            <router-link to="#" href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
               <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>
               <span class="ml-3">Help</span>
            </router-link>
         </li>
         <div id="dropdown-cta" class="p-4 mt-6 bg-blue-50 rounded-lg dark:bg-gray-900 hover:dark:bg-gray-700 " role="alert">
         <div class="flex items-center mb-3">
            <span class="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-teal-200 dark:text-teal-900">Beta</span>
         </div>
         <p class="mb-3 text-sm text-blue-900 dark:text-blue-400">
            This is Still In Development mod, sorry for the Inconvenience
         </p>
      </div>
      </ul>
   </div>
</aside>
</template>
<script>
import { useUsersStore } from '../../../stores/users'
import BackToCurrentPositionButton from '@/components/UI/Utilities/BackToCurrentPositionButton.vue';
const usersStore = useUsersStore();
export default {
    name: 'Sidebar',
    data(){
    return{
      user:{
        id: usersStore.getAuth.user.id,
        name: usersStore.getAuth.user.name,
      }
    }
  },

  components:{
    BackToCurrentPositionButton,
  },
    mounted(){
      console.log(usersStore.getAuth)
  },

}
</script>

<style>

</style>
