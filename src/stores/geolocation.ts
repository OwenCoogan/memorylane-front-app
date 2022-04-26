import { defineStore } from 'pinia'
const { geolocation } = navigator;
export const useGeolocationStore = defineStore({
  id:'geolocation',
  state:()=>({
    currentPosition:{
      latitude:1,
      longitude:1,
      range:1
    }
  }),
  getters:{
  },
  actions:{
    async getCurrentPosition(){
      return new Promise((resolve, reject) => {
        if (geolocation) {
          geolocation
            .getCurrentPosition(({ coords }) => {
              const currentPosition = {
                long: coords.longitude,
                lat: coords.latitude,
              };
              this.currentPosition.latitude = coords.latitude,
              this.currentPosition.longitude = coords.longitude,
              resolve(currentPosition);
            },
            (err) => {
              reject(err);
            });
        } else {
          console.info('Geolocation is not supported by this browser.');
          reject();
        }
      });
    },
    async switchCurrentPosition(payload:any){
      console.log(this.currentPosition)
      this.currentPosition.latitude = payload.latitude;
      this.currentPosition.longitude = payload.longitude;
      console.log(this.currentPosition)
    }
  }
})
