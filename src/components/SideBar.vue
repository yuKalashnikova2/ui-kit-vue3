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
            <router-link to="/Burger">
                <h2>Burger</h2>
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
        gap: 1.5rem;
        & a {
            color: #fff;
        }
    }
}
</style>
