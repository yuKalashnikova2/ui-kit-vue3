<script setup>
import { ref } from 'vue'
import TopHeader from './components/TopHeader.vue'
import Burger from './components/Burger.vue';
import SideBar from './components/SideBar.vue'
const isOpen = ref(false)
const handleOpen = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="container">
    <TopHeader />
    <div class="wrapper">
      <div class="sidebar__header"
      :class="{ 'sidebar__header_open': isOpen }">
        <router-link to="/">
                <div class="sidebar__logo">
                    <img src="/vue.svg" alt="vue" />
                </div>
            </router-link>
            <div class="sidebar__mobile">
              <!-- <Burger /> -->
            </div>
      <div class="sidebar__button"
      :class="{ 'sidebar__button_open': isOpen }">
        <button  @click="handleOpen" >
                <img src="/right_arrow.svg" alt="come-back" />
      </button>
      </div>
    
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
    // max-width: 1280px;
    height: 100vh;

  }
  .wrapper {
 
    @media(max-width: 992px) {
      width: 100%;
    }
  }
  .content {
    margin-left: 70px;
    transition: all 0.5s ease-in-out;
    @media(max-width: 768px) {
      margin-left: 0;
      margin-top: 2rem;
    }
    &__open {
      margin-left: 300px;
      @media(max-width: 768px) {
      margin-left: 0;
    }
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
        @media(max-width: 768px) {
            display: none;
        }
        &:hover {
            opacity: 0.8;
        }
        & img {
            width: 100%;
            @media(max-width: 768px) {
                    transform: rotate(90deg);
                }
        }
        &.open {
          margin-left: 250px;
            & img {
                transform: rotate(180deg);
               
            }
        }
    }
    .sidebar__button {
      transition: all 0.5s ease-in-out;
      &_open {
        & img {
                transform: rotate(180deg);
                @media(max-width: 768px) {
                    transform: rotate(90deg);
                }
            }
        
      }
    }
  .sidebar__header {
    background-color: #1e293b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    padding-left: 1rem;
    padding-top: 0.5rem;
    padding-right: 0.5rem;
    transform: translateX(-250px);
    transition: all 0.5s ease-in-out;
    @media(max-width: 768px) {
      width: 100%;
      transform: translateX(0);
      padding-right: 1rem;
      padding-bottom: 0.5rem;
      transition: none;
    }
    &_open {
      transform: translateX(0);

    }
  }
  .sidebar__mobile {
    display: none;
    @media(max-width: 768px) {
      display: block;
    }
  }
</style>
