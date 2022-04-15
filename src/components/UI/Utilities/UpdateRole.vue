<template>
  <button @click="switchPosition(lat,long)">
    Update Role
  </button>
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
