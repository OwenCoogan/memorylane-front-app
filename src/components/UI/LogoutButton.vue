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
  mounted(){
  },
  methods:{
    logout(){
      localStorage.removeItem('MemoryLaneCookie')
      this.$router.push('/login');
    }
  }
}
</script>
