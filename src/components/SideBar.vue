<script setup>
const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false,
    },
})
</script>

<template>
    <div :class="['sidebar', isOpen ? 'sidebar__open' : '']">
        <div class="sidebar__links">
            <router-link to="/PaginationView">
                <h2>Pagination</h2>
            </router-link>
            <router-link to="/CarouselView">
                <h2>Carousel</h2>
            </router-link>
            <router-link to="/InputDubbleView">
                <h2>Input Dubble</h2>
            </router-link>
            <router-link to="/BurgerView">
                <h2>Burger</h2>
            </router-link>
            <router-link to="/AccordionView">
                <h2>Accordion</h2>
            </router-link>
            <router-link to="/marqueeview">
                <h2>Marquee</h2>
            </router-link>
            <router-link to="/modalview">
                <h2>Modal</h2>
            </router-link>
            <router-link to="/progressview">
                <h2>Progress Bar</h2>
            </router-link>
            <router-link to="/tabsview">
                <h2>Tabs</h2>
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.sidebar {
    position: fixed;
    z-index: 5;
    padding: 1rem;
    width: 300px;
    transform: translateX(-250px);
    background-color: #1e293b;
    vertical-align: top;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    transition: all 0.5s ease-in-out;
    & h2 {
        font-size: 22px;
    }
    @media(max-width: 768px) {
        display: none;
    }
    &__open {
        transform: translateX(0px);
    }
    &__logo {
        width: 30px;
        cursor: pointer;
        & img {
            width: 100%;
        }
    }
    & button {
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
        &:hover {
            opacity: 0.8;
        }
        & img {
            width: 100%;
        }
        &.open {
            & img {
                transform: rotate(180deg);
            }
        }
    }
    &__links {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      
        & a {
            color: #fff;
            text-decoration: none;
            padding: 0.5rem;
            border-radius: 8px;
            &:hover {
                background-color: rgba(53, 73, 94, 0.6)  ;
            
        }
        }
       
    }
}
</style>
