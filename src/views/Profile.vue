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
      <div class=" flex flex-col min-w-0 break-words bg-white dark:bg-slate-900 w-full mb-6 shadow-xl rounded-lg ">
        <div class="px-6">
          <div class="flex flex-wrap justify-center">
          </div>
          <div class="text-center mt-12">
            <div class="flex w-1/4 m-auto">
               <img class="block object-cover w-64 h-64 m-auto rounded-full" :src="user.profileImage? user.profileImage :'https://jsl-online.com/wp-content/uploads/2017/01/placeholder-user.png'" alt="Profile image"/>
              <ImageUploadForm v-if="isEditable === true"
              :route="`http://localhost:6950/upload/user/${user.id}/profile/picture`"
              @updatedImageList="getuserProfile"
              />
            </div>

            <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
              {{user.name}}
            </h3>
            <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
              {{user.description}}
            </div>
            <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
              Email : {{user.email}}
            </div>
             <div class="flex justify-between px-10 py-5 w-1/4 m-auto">
                <div class="text-center">
                    <p class="font-bold">{{user.posts?.length}}</p>
                    <p class="text-xs">Posts</p>

                </div>
                <div class="text-center">
                    <p class="font-bold">{{user.comments?.length}}</p>
                    <p class="text-xs">Comments</p>
                </div>
                <div class="text-center">
                  <button v-if="isEditable === true" @click="toggleForm()" class="bg-teal-500">
                    <p>Edit Profile</p>
                  </button>
                </div>
                <div class="text-center">
                  <EditUserForm v-if="isEditable === true"
                  @updatedUser="getUserProfile"
                  :user="user"
                  />
                  <FriendRequestButton v-else :userId="user.id"/>
                </div>
            </div>
          </div>
          <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-9/12 px-4">
                <ul v-if="this.user.posts" class=" list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 ">
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
                </ul>
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
import EditUserForm from '../components/UI/Form/EditUserForm.vue'
import ImageUploadForm from '../components/UI/Form/UploadImageForm.vue'
import FriendRequestButton from '../components/UI/Utilities/FriendRequestButton.vue'
const UsersStore = useUsersStore()
export default {
  name: 'Profile',
  components:{
    PostCard,
    EditUserForm,
    ImageUploadForm,
    FriendRequestButton
  },
  data() {
    return {
    user:{
      id:'',
      name:'',
      profileImage:'',
      description:'',
      email:'',
      posts:null,
      imageFormToggled:false,
      isEditable:false,
      formToggled:false,
      comments:null,
    }
    };
  },
  methods:{
    getUserType(){
      if( UsersStore.getAuth.user.id === this.user.id ){
        this.isEditable = true
      }
    },
    toggleForm(){
      this.formToggled = !this.formToggled
    },
    async getUserProfile(){
      await UsersStore.getUserProfile(this.$route.params.id)
    .then(res =>{
      this.user = {
        id:UsersStore.getViewedProfile.id,
        description:UsersStore.getViewedProfile.description,
        profileImage: UsersStore.getViewedProfile.images ? UsersStore.getViewedProfile.images[0].url : '',
        name:UsersStore.getViewedProfile.name,
        email:UsersStore.getViewedProfile.email,
        posts:UsersStore.getViewedProfile.posts,
        comments:UsersStore.getViewedProfile.comments,
      }
      this.getUserType()
    })
    },
    toggleForm(){
      this.formToggled = !this.formToggled
      console.log(this.formToggled)
    }
  },
  computed: {
  },
  mounted() {
    this.getUserProfile()
  }
};
</script>
