import axios from 'axios'
import { defineStore } from 'pinia'
import { useGeolocationStore } from './geolocation'

const geolocationStore = useGeolocationStore()
export const usePostsStore = defineStore({
  id:'posts',
  state:()=>({
    posts:null
  }),
  getters:{
  },
  actions:{
    async getPosts(req:any){
      console.log(req?.body)
      const posts = await axios.get(`${import.meta.env.API_URL}/v1/posts`,{
        data:{
          ...req?.body,
        }
      })
      this.posts = posts.data.data
      return posts.data
    },
    async getSinglePost(req:any){
      const post = await axios.get(`${import.meta.env.API_URL}/v1/posts/${req?.id}`)
      return post.data
    }
  }
})
