<template>
  <button  class=' mr-1 justify-center focus:outline-none space-between bg-teal-600 hover:bg-teal-900 font-medium py-1 px-2 rounded items-center'>
    <svg id='icon' class='w-4 h-4 m-auto' fill='#FFF' stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="white"><path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
 	<span id='text' class='text-white text-sm select-none'>Add friend</span>
  </button>
</template>

<script>
import { useUsersStore } from '../../../stores/users'
const UsersStore = useUsersStore()
export default {
  name: 'FriendRequestButton',
  data() {
    return {
      requestStatus:null,
    }
  },
  props: {
    userId: null,
  },
  components: {
  },
  mounted(){
    this.position
  },
  methods:{
    methods:{
      async addFriend(userId){
        await UsersStore.addFriend(userId)
        .then(res =>{
          this.requestStatus = res.data
        })
      },
    }
  }
}
</script>
