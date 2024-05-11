<script setup>

</script>

<template>
  <div class="container">
    <div class="wrapper">
      <h1>Vue 3</h1>
    <div>
      <RouterView />
    </div>
    </div>

  </div>
</template>

<style scoped>
  .container {
    margin: 0 auto;
    background-color: #FFF;
    border-radius: 12px;
    width: 1280px;
    /* height: 100vh; */

  }
  .wrapper {
    width: 80%;
    margin: 0 auto;
    padding: 30px;
  }
</style>
