import axios from 'axios'
import { defineStore } from 'pinia'

export const usePostsStore = defineStore({
  id:'posts',
  state:()=>({
    posts:null
  }),
  getters:{
  },
  actions:{
    async getPosts(){
      const posts = await axios.get("http://localhost:6950/v1/posts")
      this.posts = posts.data.data
      return posts
    }
  }
})
