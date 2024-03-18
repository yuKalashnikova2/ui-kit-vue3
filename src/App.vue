<script setup>
import Pagination from './components/Pagination.vue';
</script>

<template>
  <div class="container">
    <div class="wrapper">
      <h1>Vue 3</h1>
    <div>
    <Pagination />
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

  }
  .wrapper {
    width: 80%;
    margin: 0 auto;
  }
</style>
