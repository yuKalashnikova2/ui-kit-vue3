<script setup>
import { ref } from 'vue'
import TopHeader from './components/TopHeader.vue'
import SideBar from './components/SideBar.vue'
const isOpen = ref(false)
const handleOpen = () => {
    isOpen.value = !isOpen.value
    console.log('клик работает', isOpen.value)
}

const linksMenu = ref([
    {
        id: 1,
        name: 'Home',
        path: '/',
    },
    {
        id: 2,
        name: 'Pagination',
        path: '/PaginationView',
    },
    {
        id: 3,
        name: 'Burger',
        path: '/Burger',
    },
    {
        id: 4,
        name: 'Carousel',
        path: '/CarouselView',
    },
    {
        id: 5,
        name: 'Input Dubble',
        path: '/InputDubbleView',
    },
])

// const isVisible = ref(false)
</script>

<template>
    <div class="container">
        <TopHeader />
        <div class="wrapper">
            <div
                class="sidebar__header"
                @click="handleOpen"
                :class="{ sidebar__header_open: isOpen }"
            >
                <router-link to="/">
                    <div class="sidebar__logo">
                        <img src="/vue.svg" alt="vue" />
                    </div>
                </router-link>
                <div class="sidebar__mobile">
                    <header class="burger__header">
                        <div class="burger__button" :class="{ open: isOpen }">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </header>
                </div>
                <div
                    class="sidebar__button"
                    :class="{ sidebar__button_open: isOpen }"
                >
                    <button @click.stop="handleOpen">
                        <img src="/right_arrow.svg" alt="come-back" />
                    </button>
                </div>
            </div>

            <Transition>
                <nav class="burger__nav" v-if="isOpen">
                    <ul class="burger__list">
                        <li
                            class="burger__item"
                            v-for="link in linksMenu"
                            :key="link.id"
                        >
                            <router-link :to="link.path" @click="handleOpen">
                                {{ link.name }}
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </Transition>
            <SideBar :isOpen="isOpen" />
            <div :class="['content', isOpen ? 'content__open' : '']">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    margin: 0 auto;
    background-color: #fff;
    // max-width: 1280px;
    height: 100vh;
}
.wrapper {
    @media (max-width: 992px) {
        width: 100%;
    }
}
.content {
    margin-left: 70px;
    transition: all 0.5s ease-in-out;
    @media (max-width: 768px) {
        margin-left: 0;
        margin-top: 2rem;
    }
    &__open {
        margin-left: 300px;
        @media (max-width: 768px) {
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
    @media (max-width: 768px) {
        display: none;
    }
    &:hover {
        opacity: 0.8;
    }
    & img {
        width: 100%;
        @media (max-width: 768px) {
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
    @media (max-width: 768px) {
        display: none;
    }
    &_open {
        & img {
            transform: rotate(180deg);
            @media (max-width: 768px) {
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
    z-index: 9;
    position: relative;
    @media (max-width: 768px) {
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
    @media (max-width: 768px) {
        display: block;
    }
}
.burger {
  display: none;
    &__header {
        background-color: #1e293b;
        padding: 20px 10px;
        z-index: 9;
        overflow-y: hidden;
        position: relative;
    }
    &__button {
        display: flex;

        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 5;
        align-items: center;
        border: none;
        outline: none;
        width: 30px;
        height: 20px;
        cursor: pointer;
        span {
            display: block;
            position: absolute;
            background-color: aliceblue;
            width: 30px;
            height: 2px;
            left: 5px;
            &:nth-child(1) {
                // background-color: blueviolet;
                transform: translateY(10px);
                transition: background cubic-bezier(0.075, 0.82, 0.165, 1),
                    opacity 0.3s, transform 0.4s;
            }

            &:nth-child(3) {
                transform: translateY(-10px);
                transition: background cubic-bezier(0.075, 0.82, 0.165, 1),
                    opacity 0.3s, transform 0.4s;
            }
        }
    }
    &__nav {
      display:none;
        background-color: #1e293b;
        position: absolute;
        z-index: 7;
        width: 100%;
        margin-top: 0.4rem;
        font-size: 32px;
        @media(max-width: 768px) {
          display: block;
        }
    }
    &__list {
        display: flex;
        list-style: none;
        flex-direction: column;
        width: 100%;
        padding: 0;
    }
    &__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        cursor: pointer;
        &:hover {
            opacity: 0.8;
        }
        & a {
            color: #fff;
            width: 100%;
        }
    }
}
.open {
    & span {
        &:nth-child(1) {
            transform: translateY(0) rotate(45deg);
        }
        &:nth-child(2) {
            opacity: 0;
        }
        &:nth-child(3) {
            transform: translateY(0) rotate(-45deg);
        }
    }
}
.v-enter-active,
.v-leave-active {
    transform: translateY(0);
    transition: 0.6s ease;
}

.v-enter-from,
.v-leave-to {
    transform: translateY(-100%);
}
</style>
