<template>
  <div class="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400 dark:bg-slate-900">
      <img class='w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer' alt='User avatar' :src='`
                ${usersStore.getProfile.profile_image ? usersStore.getProfile.profile_image.profile_image : "https://jsl-online.com/wp-content/uploads/2017/01/placeholder-user.png"}`'>
      <span class="absolute inset-y-0 right-0 flex items-center pr-6">
          <button type="submit" class="p-1 focus:outline-none focus:shadow-none hover:text-teal-500" @click="this.submitComment()">
            <svg class="w-6 h-6 transition ease-out duration-300 hover:text-teal-500 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
      </span>
        <input type="text" class="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent dark:border-px dark:border-gray-100 dark:text-gray-100 appearance-none rounded-tg placeholder-gray-400 focus:bg-white dark:bg-slate-900 focus:outline-none focus:border-teal-500 focus:text-gray-900 focus:dark-text-white-900 focus:dark:text-white-900 focus:shadow-outline-blueborder-radius: 25px" v-model="this.comment" placeholder="Post a comment..." autocomplete="off">
  </div>
  <SuccessMessage class="m-t-2" v-if="this.error ===null && this.message !=null" :message="this.message" />
  <ErrorMessage class="m-t-2" v-if="this.message ===null && this.error !=null" :message="this.error" />
</template>
<script>
import axios from 'axios'
import SuccessMessage from '../Utilities/ValidationMessages/SuccessMessage.vue'
import ErrorMessage from '../Utilities/ValidationMessages/ErrorMessage.vue'
import { useUsersStore } from '../../../stores/users'
const usersStore = useUsersStore()
export default {
  name: 'CommentForm',
  data(){
    return{
      comment:null,
      author:usersStore.getAuth.user.id,
      usersStore,
      message:null,
      error:null,
    }
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components:{
    SuccessMessage,
    ErrorMessage,

  },
  mounted(){
  },
  methods:{
    async submitComment(){
      let data = {
        comment:this.comment,
        postId:this.id,
        userId:this.author
      }
      await axios.post(`http://localhost:6950/v1/post/${this.id}/comment/add/`, data)
      .then(res => this.message = "Comment added successfully",
        this.$emit('updatedCommentList'))
      .catch(err => this.error = "Something Went Wrong")
    }
  }
}
</script>
