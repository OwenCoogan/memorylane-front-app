import { defineStore } from 'pinia'
const { geolocation } = navigator;
export const useGeolocationStore = defineStore({
  id:'geolocation',
  state:()=>({
    currentMarkerPosition:{
      latitude:1,
      longitude:1,
      range:1
    },
    activeGeolocation:true,
  }),
  getters:{
  },
  actions:{
    async getCurrentPosition(){
      return new Promise((resolve, reject) => {
        if (geolocation) {
          geolocation
            .getCurrentPosition(({ coords }) => {
              const currentMarkerPosition = {
                long: coords.longitude,
                lat: coords.latitude,
              };
              this.currentMarkerPosition.latitude = coords.latitude,
              this.currentMarkerPosition.longitude = coords.longitude,
              this.activeGeolocation=true,
              resolve(currentMarkerPosition);
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
  }
})
