<template>
  <div class="container">
    <div class="postlist">
      <li v-for="user in users" :key="user.name" class="grid grid-cols-4 gap-4">
        <div class="p-8 w-96 cursor-pointer rounded-3xl bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
          <img v-if="user.images[0]" :src="`http://localhost:6950/resources/static/assets/uploads/post/${user.images[0]?.name}`" alt="Kobe Bryant" title="Kobe Bryant" class="mx-auto" />
        <div class="text-center">
          <h3 class="text-center text-4xl font-bold">{{user.name}}</h3>
          <span class="text-sm">{{user.email}}</span>
        </div>
        <ul class="mt-16 mb-20 flex justify-center text-center text-2xl">
          <li class="flex flex-col"><span class="font-bold">FG%</span> 44.7</li>
        </ul>
        <div class="text-center">
          <UpdateRole class="rounded-xl bg-black px-24 py-2 text-white">Update Role</UpdateRole>
        </div>
  </div>
      </li>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import UpdateRole from '@/components/UI/Utilities/UpdateRole'
export default {
  name: 'Profile',
  components:{
    UpdateRole
  },
  data() {
    return {
      users:null
    };
  },
  computed: {
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers(){
      const token = localStorage.getItem('MemoryLaneCookie')
      console.log(token)
      await axios.get('http://localhost:6950/auth/users',{
        token: token,
      })
      .then(response => {
        this.users = response.data.data;
      })
    }
  }
};
</script>
