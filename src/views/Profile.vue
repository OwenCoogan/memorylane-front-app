<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{user.name}}</strong>
      </h3>
    </header>
    <p>
      <strong>Id:</strong>
      {{user.id}}
    </p>
    <p>
      <strong>Email:</strong>
      {{user
      .email}}
    </p>
  </div>
</template>

<script>
import { useUsersStore } from '../stores/users'
const UsersStore = useUsersStore()
export default {
  name: 'Profile',
  data() {
    return {
    user:{
      id:UsersStore.getAuth.user.id,
      name:UsersStore.getAuth.user.name,
      email:UsersStore.getAuth.user.email,
    }
    };
  },
  computed: {
  },
  mounted() {
    console.log(UsersStore.getAuth)
  }
};
</script>
