<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{currentUser.firstname}}</strong>
      </h3>
    </header>
    <p>
      <strong>Id:</strong>
      {{currentUser.id}}
    </p>
    <p>
      <strong>Email:</strong>
      {{currentUser.email}}
    </p>
  </div>
</template>

<script>
import { useUsersStore } from '../stores/users'
const UsersStore = useUsersStore()
console.log(UsersStore.getAuth)
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>
