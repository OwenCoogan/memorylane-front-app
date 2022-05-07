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
    async getPosts(req:any){
      const posts = await axios.get(`${import.meta.env.VITE_API_URL}/v1/posts`,{
        data:{
          ...req?.body,
        }
      })
      this.posts = posts.data.data
      return posts.data
    },
    async getSinglePost(req:any){
      console.log(req)
      const post = await axios.get(`${import.meta.env.VITE_API_URL}/v1/posts/${req.id}`)
      console.log(post.data)
      return post.data
    }
  }
})
