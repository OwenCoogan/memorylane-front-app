<template>
  <div class="flex justify-center items-center mt-52">
    <div class="w-full max-w-xs">
      <form class="bg-white dark:bg-slate-900 shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit="handleLogin"
      >
        <div class="identity-input mb-4">
          <label
            for="identity"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            Email</label
          >
          <input
            id="identity"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Email"
            aria-describedby="emailHelp"
            v-model="user.email"
          />
          <span class="text-xs text-red-700" id="emailHelp"></span>
        </div>

        <div class="password-input mb-6">
          <label
            for="identity"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Password</label
          >

          <input
            aria-describedby="passwordHelp"
            v-model="user.password"

            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="*******"
          />



          <span class="text-xs text-red-700" id="passwordHelp"></span>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-teal-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <router-link to="/register" class="border border-transparent text-base font-medium rounded-md text-teal-700 bg-teal-100 hover:bg-teal-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">New User ?</router-link>
        </div>
        <router-link to="/login" class="w-full block my-3 underline">
            Forgot Password?
          </router-link>
      </form>
    </div>
  </div>
</template>

<script>

import { useUsersStore } from '../stores/users'
const UsersStore = useUsersStore()

export default {
  name: 'Signin',
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      loading: false,
      message: ''
    };
  },
  computed: {
  },
  created() {
  },
  methods: {
    async handleLogin(e) {
      e.preventDefault();
      this.loading = true;
      await UsersStore.login(this.user)
      .then(response => {
          this.$router.push('/map')
      })
      .catch(error => {
        this.loading = false;
        this.message = 'Server Error';
      })
      }
    }
};
</script>
