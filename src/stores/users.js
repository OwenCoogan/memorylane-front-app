import { defineStore } from 'pinia'
import { fetchData } from '../utilities/apiManagement'

export const useUsersStore = defineStore({
  id:'users',
  state:()=>({
    auth:null
  }),
  getters:{
    user(){
      return this.users
    }
  },
  actions:{
    async getTrains(){
      await fetchData("https://data.ratp.fr/api/v2/catalog/datasets?limit=10&offset=0&timezone=UTC")
      .then(res => this.trains = res.datasets)
    }
  }
})
