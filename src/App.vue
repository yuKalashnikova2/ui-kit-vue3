<script setup>
import Header from './components/Header.vue'
</script>

<template>
  <div class="container">
    <div class="wrapper">
      <Header />
      <!-- <div class="header">  
        <router-link to="/">
          <button>
            <img src="/back.svg" alt="come-back">
          </button>
        </router-link>
        <h1>Vue 3</h1>
        
      </div> -->

    <div>
      <RouterView />
    </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
  .container {
    margin: 0 auto;
    background-color: #FFF;
    border-radius: 12px;
    max-width: 1280px;
    /* height: 100vh; */

  }
  .wrapper {
    width: 80%;
    margin: 0 auto;
    padding: 30px;
    @media(max-width: 992px) {
      width: 100%;
    }
  }

</style>
