<template>
    <header class="header">
        <router-link to="/">UI Kit (Vue 3 + Composition API )</router-link>
    </header>
</template>

<style lanf="scss" scoped>
    .header {
        background: #fff;
        font-weight: bold;
        padding: 0 20px;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.07);
        height: 62px;
        display: flex;
        align-items: center;
        z-index: 1;
        position: relative;
        @media(max-width: 768px) {
            display: none;
        }
        & a {
            color: #42b883;
        }
    }
</style>