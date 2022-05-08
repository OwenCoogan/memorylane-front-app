<template>
  <div class="container pt-4 pb-12 m-auto">
        <Loader v-if="this.isLoading === true" />
        <div v-if="this.isLoading === false" class="max-w-xl m-auto">
          <router-link :to='`/userProfile/${post.author.id}`'>
            <div class="flex flex-row mt-2 px-2 py-3 mx-3">
              <div class="w-auto h-auto rounded-full border-2 border-teal-500">
                  <img class='w-12 h-12 object-cover rounded-full shadow cursor-pointer' alt='User avatar' :src='`
                  ${post.author.avatar ? post.author.avatar : "https://jsl-online.com/wp-content/uploads/2017/01/placeholder-user.png"}`'/>
              </div>
              <div class="flex flex-col mb-2 ml-4 mt-1">
                  <div class='text-gray-600 text-sm font-semibold'>{{post.author.name}}</div>
                  <div class='flex w-full mt-1'>
                      <div class='text-gray-400 font-thin text-xs'>
                          {{this.formatDate(post.createdAt)}}
                      </div>
                  </div>
              </div>
            </div>
          </router-link>
          <div class="border-b border-gray-100"></div>

          <h1 class="text-gray-600 font-semibold text-lg mb-2 mx-3 px-2" v-bind:post="post?.title">{{ post.title ? post.title : "Your Title"}}</h1>
          <div class='text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2'>
            <img class="rounded" :src="`http://localhost:6950/resources/static/assets/uploads/post/${post.images[0] ? post.images[0].name :''}`">
          </div>
          <div class="w-full mb-4">
            <div class="mx-auto gradient my-0 py-0 rounded-t">
            <p class="text-gray-500 text-sm mb-6 mx-3 px-2">{{post.content}}</p>
            </div>
          </div>
          <div class="w-full mb-4  max-w-4xl mx-auto">
            <div class="grid grid-cols-4 gap-4" v-if="post.images">
              <img v-for="image in post.images" :src="`http://localhost:6950/resources/static/assets/uploads/post/${image.name}`"  v-bind:key="image.name" />
            </div>
            <div class="border-b border-gray-100"></div>
            <h2>Comments</h2>
            <div class="comment-list">
              <div class="my-2 flex gap-3 rounded-md bg-white p-2 text-black shadow" v-for="comment in post.comments" v-bind:key="comment.content">
              <!-- Photo -->
              <div class="mt-2">
                <img class="w-10 rounded-full shadow" :src='`${comment.author.images ? comment.author.images[0] : "https://jsl-online.com/wp-content/uploads/2017/01/placeholder-user.png"}`' alt="" srcset="" />
              </div>
              <!-- Content -->
              <div class="w-full">
                <!-- Header -->
                <div class="flex items-center justify-between py-1 pr-2">
                  <!-- Author -->
                  <div>
                    <router-link :to="`/userProfile/${comment.author.id}`" class="text-teal-400 hover:underline">{{comment.author.name}}</router-link>
                    <span class="text-sm font-thin text-gray-500"> {{this.formatDate(comment.createdAt)}}</span>
                  </div>
                </div>
                <!-- Context -->
                <div class="p-1">
                  <p class="text-gray-900 border-l-2 px-1 border-teal-500 bg-gray-100 rounded">{{comment.comment}}</p>
                </div>
              </div>
            </div>
              <div class="comment" >
              </div>
            </div>


          <div class="border-b border-gray-100"></div>
          <h2>Comment Form</h2>
          <CommentForm :id="this.$route.params.id"  @updatedCommentList="getPost" />


          <div class="border-b border-gray-100"></div>
          <h2>Upload Image Form</h2>
          <UploadImageForm :id="this.$route.params.id" :route="`http://localhost:6950/upload/post/${this.$route.params.id}/image/add/`"  @updatedImageList="getPost" />
          </div>
        </div>
      </div>
</template>

<script>
import Loader from '@/assets/svg/Loader.vue'
import UploadImageForm from '@/components/UI/Form/UploadImageForm.vue'
import CommentForm from '@/components/UI/Form/CommentForm.vue'
import { formatDate } from '../utilities/formatDate'
import { usePostsStore } from '../stores/posts'

const postStore = usePostsStore()
export default {
  name: 'PostPage',

  props: {
    'id': {
      type: String,
      required: true
    }
  },
  components: {
      Loader,
      UploadImageForm,
      CommentForm
  },
  data(){
    return{
      post:null,
      isLoading:true
    }
  },
  mounted(){
    postStore.getSinglePost({
      id:this.$route.params.id
    }).then(res=>{
      this.post = res.data
      this.isLoading = false
    })
  },
  methods:{
    getPost(){
      postStore.getSinglePost({
        id:this.$route.params.id
      }).then(res=>{
        this.post = res.data
        this.isLoading = false
      })
    },
    formatDate(date){
      return formatDate(date)
    }
  }
}
</script>
