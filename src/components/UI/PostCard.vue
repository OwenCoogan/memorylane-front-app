<template>
  <div class="p-10">
    <!--Card 1-->
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" v-if="img[0]" :src="`http://localhost:6950/resources/static/assets/uploads/post/${img[0].name}`" :alt="img[0].name">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ title }}</div>
        <p class="text-gray-700 text-base">
        {{description}}
        </p>
        <div class="geolocation">
          <h3 class="text-sm bold">Géolocation</h3>
          <div class="flex">
            <span class="w-1/2">{{lat}}</span>
            <span class="w-1/2">{{long}}</span>
          </div>
        </div>
      </div>
      <div class="px-6 pt-4 pb-2">
      <span v-for="tag in tags" :key="tag.name" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{tag}}</span>
      </div>
      <router-link  :to="'/Post/'+id"  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">View Post</router-link>
      <SwitchPosition :lat="lat" :long="long" />
    </div>
  </div>
</template>

<script>
import SwitchPosition from '@/components/UI/Utilities/NavigateToPosition'
export default {
  name: 'PostCard',
  props: {
    title: {
      type: String,
      required: true,
      default:'azrazeraze'
    },
    id:{
      type: String,
      required: true,
    },
    img: {
      type: String,
      default: '../image-path/image-name.jpg',
    },
    description: {
      type: String,
      default: 'Lorem Ipsum',
    },
    lat: {
      type: Number
    },
    long:{
      type: Number
    },
    tags: {
      type: Object,
    }
  },
  components:{
    SwitchPosition
  },
  data(){
  },
  mounted(){
  },
  methods:{
  }
}

</script>
