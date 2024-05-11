<script setup>

const props = defineProps({
    slide: {
        type: String,
        default: 'str',
    },
    currenSlide: {
        type: Number,
    },
    index: {
        type: Number,
    },
    direction: {
        type: String,
    },
})

const transitionEffect = (direction) => {
    return direction === 'right' ? 'slide-out' : 'slide-in'
}
</script>

<template>
    <Transition :name="transitionEffect(direction)">
        <div class="carousel__item" v-show="currenSlide === index">
            <img :src="slide" />
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
.carousel__item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    & img {
        width: 100%;
    }
}
.slide-in-enter-active,
.slide-in-leave-active {
    transition: all 1s ease-in-out;
}
.slide-in-enter-from {
    transform: translateX(-100%);
}
.slide-in-leave-to {
    transform: translateX(100%);
}

.slide-out-enter-active,
.slide-out-leave-active {
    transition: all 1s ease-in-out;
}
.slide-out-enter-from {
    transform: translateX(100%);
}
.slide-out-leave-to {
    transform: translateX(-100%);
}
</style>
