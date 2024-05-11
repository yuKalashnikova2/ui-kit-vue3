<script setup>
const emit = defineEmits(['prev', 'next'])
</script>

<template>
    <div>
        <button class="carousel-control left" @click="emit('prev')">
            Prev
        </button>
        <button class="carousel-control right" @click="emit('next')">
            Next
        </button>
    </div>
</template>

<style lang="scss" scoped>
.carousel-control {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    display: inline-block;
    height: 50px;
    width: 70px;
    top: calc(50% - 25px);
    color: #f3f3f3;
    cursor: pointer;
}
.left {
    left: 0;
}
.right {
    right: 0;
}
</style>
