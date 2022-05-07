<template>
  <section class="relative block h-500-px">
    <div class="absolute top-0 w-full h-full bg-center bg-cover" style="
            background-image: url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80');
          ">
      <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
    </div>
    <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style="transform: translateZ(0px)">
      <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
        <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
  </section>
  <section class="relative bg-blueGray-200">
    <div class="container mx-auto px-4">
      <div class=" flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg ">
        <div class="px-6">
          <div class="flex flex-wrap justify-center">
            <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
              <div class="relative">
                <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px">
              </div>
            </div>
            <div class="w-full lg:w-4/12 px-4 lg:order-1">
              <div class="flex justify-center py-4 lg:pt-4 pt-8">
                <div class="mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{{user.posts?.length}}</span><span class="text-sm text-blueGray-400">Posts</span>
                </div>
                <div class="lg:mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">89</span><span class="text-sm text-blueGray-400">Comments</span>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-12">
            <img class="inline object-cover w-16 h-16 mr-2 rounded-full" :src="user.profileImage? user.profileImage :'https://jsl-online.com/wp-content/uploads/2017/01/placeholder-user.png'" alt="Profile image"/>
            <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              {{user.name}}
            </h3>
            <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
              Los Angeles, California
            </div>
            <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
              Email : {{user.email}}
            </div>
          </div>
          <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-9/12 px-4">
                <div v-if="this.user.posts" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 ">
                  <li  v-for="post in this.user.posts" :key="post">
                  <PostCard
                  :title="post.title"
                  :id="post.id"
                  :img="post.images"
                  :description="post.content"
                  :tags="post.tags"
                  :lat="post.latitude"
                  :long="post.longitude"
                  :author="this.user"
                  />
                  </li>
                </div>
                <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                  An artist of considerable range, Jenna the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes,
                  performs and records all of his own music, giving it a
                  warm, intimate feel with a solid groove structure. An
                  artist of considerable range.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


</template>

<script>
import { useUsersStore } from '../stores/users'
import PostCard from '../components/UI/PostCard.vue'
const UsersStore = useUsersStore()
export default {
  name: 'Profile',
  components:{
    PostCard
  },
  data() {
    return {
    user:{
      id:'',
      name:'',
      profileImage:'',
      email:'',
      posts:null,
    }
    };
  },
  computed: {
  },
  async mounted() {
    await UsersStore.getUserProfile(this.$route.params.id)
    .then(res =>{
      this.user = {
        id:UsersStore.getViewedProfile.id,
        profileImage: UsersStore.getViewedProfile.images ? UsersStore.getViewedProfile.images[0].url : '',
        name:UsersStore.getViewedProfile.name,
        email:UsersStore.getViewedProfile.email,
        posts:UsersStore.getViewedProfile.posts,
      }
      console.log(this.user.posts)
    })
  }
};
</script>
