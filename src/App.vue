<script setup>
// import { ref } from 'vue'
import { ref } from 'vue'
import TopHeader from './components/TopHeader.vue';
import SideBar from './components/SideBar.vue'
const isOpen = ref(false)
const handleOpen = () => {
  isOpen.value = !isOpen.value
}
// const f = ref(false)
// const handleOpen = (isOpen) => {
//   f.value = isOpen

// }
</script>

<template>
  <div class="container">
    <TopHeader />
    <div class="wrapper">
      <div class="sidebar__button"
      :class="{ 'sidebar__button_open': isOpen }">
        <button  @click="handleOpen" >
                <img src="/right_arrow.svg" alt="come-back" />
      </button>
      </div>
    
      <SideBar :isOpen="isOpen" />
    <div :class="['content', isOpen ? 'content__open' : '']"
    >
      <RouterView />
    </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
  .container {
    margin: 0 auto;
    background-color: #FFF;
    max-width: 1280px;
    height: 100vh;

  }
  .wrapper {
    // width: 80%;
    // display: flex;
    // position: relative;
    // margin: 0 auto;ds
    // padding: 30px;
    // display: grid;
    // grid-template-columns: 1fr 3fr;
    // grid-gap: 20px;
    @media(max-width: 992px) {
      width: 100%;
    }
  }
  .content {
    margin-left: 70px;
    transition: all 0.5s ease-in-out;
    &__open {
      margin-left: 300px;
    }
  }
  button {
        width: 30px;
        height: 30px;
        background-color: #42b883;
        color: #fff;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.5s ease-in-out;
        z-index: 9;
        &:hover {
            opacity: 0.8;
        }
        & img {
            width: 100%;
        }
        &.open {
          // margin-left: 250px;
            & img {
                transform: rotate(180deg);
            }
        }
    }
    .sidebar__button {
      background-color: #1e293b;
      width: 50px;
      padding: 10px;
      transition: all 0.5s ease-in-out;
      &_open {
        padding-left: 290px;
        // width: 250px;
        // transition: all 0.5s ease-in-out;
        & img {
                transform: rotate(180deg);
            }
        
      }
    }
</style>
