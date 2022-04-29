import axios from 'axios';
import { defineStore } from 'pinia'

export const useUsersStore = defineStore({
  id:'users',
  state:()=>({
    auth:{
      isAuthenticated:false,
      isRegistered:false,
      user:{
        id:0,
        name:'',
        email:'',
      }
    }
  }),
  getters:{
    getAuth(state) {
      return state.auth
    },
  },
  actions:{
    async login(payload:any){
      console.log(import.meta.env.VITE_API_URL)
      const user:Object = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, payload)
      .then((res)=>{
        this.auth.isAuthenticated = true;
        this.auth.user = {
          id:res.data.data.id,
          name:res.data.data.name,
          email:res.data.data.email,
        };
        localStorage.setItem('MemoryLaneCookie', res.data.data.token);
        return user
      })
      .catch((err)=>{
        return err
      })
    },
    async register(payload:any){
      const registeredUser:Object = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, payload)
      .then((res)=>{
        return registeredUser
      })
      .catch((err)=>{
        return err
      })
    },
    async checkUser(){
      const token = localStorage.getItem('MemoryLaneCookie');
      if(token){
        if(this.auth.isAuthenticated === false){
          console.log(import.meta.env.VITE_API_URL)
          await axios.post(import.meta.env.VITE_API_URL +'/auth/check', {token})
          .then((res)=>{
            this.auth.isAuthenticated = true;
            this.auth.user = {
              id:res.data.data.user.id,
              name:res.data.data.user.name,
              email:res.data.data.user.email,
            };
            return this.auth.user
          })
          .catch((err)=>{
            this.auth.isAuthenticated = false;
            return err
          })
        }
      }
    }

  }
})
