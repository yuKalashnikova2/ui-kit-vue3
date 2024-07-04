<script></script>

<template>
    <div class="home">
        <!-- <div>
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
        </div> -->
        <h2 class="home__title">
      Welcome to UI Kit for Vue 3!
    </h2>
        <div>
            <p class="home__descr">
                In our UI Kit for Vue 3 you will find many necessary and
                original ready-made solutions for your project.
            </p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.home {
    display: block;
    margin-left: 70px;
    &__descr {
        font-weight: 700;
    }
    &__title {
      font-weight: 700;
      font-size: 30px;
      color:#42b883;
    }
}
</style>
