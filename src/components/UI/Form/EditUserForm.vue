<template>
  <div class="">
  <form class="bg-white dark:bg-slate-900 shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="handleSubmitPost">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" :placeholder="this.name" v-model="this.name">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
        Description
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="user-description" type="text" :placeholder="this.description" v-model="this.description">
    </div>
    <button type="submit" class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
    <Loader v-if="this.loading === true"/>
      <div v-if="this.loading ===false">
        <p v-if="this.message!=null">{this.message}</p>
        <p v-else>Submit</p>
      </div>
    </button>
  </form>
</div>
</template>

<script>
import axios from 'axios'
import Loader from '@/assets/svg/Loader.vue'
import { useUsersStore } from '../../../stores/users';
const usersStore = useUsersStore()

export default {
  name: 'EditUserForm',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  components:{
    Loader
  },
  data(){
    return{
      loading:false,
      name: '',
      description: '',
    }
  },
  mounted(){
    this.name= this.user.name,
    this.description=this.user.description
  },
  methods:{
    async handleSubmitPost(){
      this.loading = true;
      axios.post(`${import.meta.env.VITE_API_URL}/auth/update`, {
          name:this.name,
          description:this.description,
          id:usersStore.getAuth.user.id
      })
      .then(response => {
        console.log(response)
      })
      .then(this.loading = false)
      .then(this.$emit('updatedUser'))
      .catch(err =>{
        this.message = err;
      });
    }
  }
}
</script>
