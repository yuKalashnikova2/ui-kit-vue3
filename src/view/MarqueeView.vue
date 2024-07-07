<script setup>
import Marquee from '../components/Marquee.vue'
import HeaderComponent from '../components/HeaderComponent.vue'
</script>

<template>
    <div class="ml-70">
        <HeaderComponent title="Marquee" />
        <div class="m-view">
            <Marquee>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                impedit? Facilis ullam tempore culpa laboriosam placeat omnis,
                facere iure amet, excepturi suscipit odit adipisci ab
                reprehenderit commodi reiciendis non sint!
            </Marquee>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.m-view {
    background-color: #42b883;
    overflow-x: hidden;
    border-radius: 8px;
}
</style>
