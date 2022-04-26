import axios from 'axios';
import { defineStore } from 'pinia'

export const useUsersStore = defineStore({
  id:'users',
  state:()=>({
    auth:{
      isAuthenticated:false,
      isRegistered:false,
      email:'',
      token:'',
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
      const user:Object = await axios.post('http://localhost:6950/auth/login', payload)
      .then((res)=>{
        this.auth.isAuthenticated = true;
        this.auth.token = res.data.data.token;
        this.auth.user = {
          id:res.data.data.id,
          name:res.data.data.name,
          email:res.data.data.email,
        };
        return user
      })
      .catch((err)=>{
        return err
      })
    },
    async register(payload:any){
      const registeredUser:Object = await axios.post('http://localhost:6950/auth/register', payload)
      .then((res)=>{
        return registeredUser
      })
      .catch((err)=>{
        return err
      })
    }
  }
})
