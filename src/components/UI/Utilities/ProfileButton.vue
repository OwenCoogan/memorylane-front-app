<template>
  <router-link to="/editProfile">
    Update Role
  </router-link>
</template>

<script>
export default {
  name: 'UpdateRole',
  props: {
    userId: {
      type: Number
    },
  },
  components: {
  },
  mounted(){
    this.position
  },
  methods:{

  }
}
</script>
