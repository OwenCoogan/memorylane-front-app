<template>
  <div class="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800" role="alert">
  <span class="font-medium">Success : </span> {{message}}
  </div>
</template>

<script>
export default {
  name: 'SuccessMessage',
  props:{
    message: null,
  }
}
</script>

<style>

</style>
