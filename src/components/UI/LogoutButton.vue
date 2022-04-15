<template>
  <div class="">
    <button @click="logout()">
      <p>Logout</p>
    </button>
  </div>
</template>
<script>
export default {
  name: 'PostList',
  props: {
  },
  data(){
    return{
    }
  },
  mounted(){
  },
  methods:{
    logout(){
      this.$store.dispatch('auth/logout')
      this.$router.push('/login');
    }
  }
}
</script>
