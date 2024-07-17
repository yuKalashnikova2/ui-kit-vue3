<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'
import CarouselItem from './CarouselItem.vue'
import CarouselControls from './CarouselControls.vue'
import CarouselDots from './CarouselDots.vue'

const slides = ref([
    '/carousel/1.png',
    '/carousel/2.png',
    '/carousel/3.png',
    '/carousel/4.png',
])

const currenSlide = ref(0)
const slideInterval = ref(null)
const direction = ref('right')
const setCurrenSlide = (index) => {
    currenSlide.value = index
}

const prev = (step = -1) => {
    const index =
        currenSlide.value > 0
            ? currenSlide.value + step
            : slides.value.length - 1
    setCurrenSlide(index)
    direction.value = 'left'
}
const next = (step = 1) => {
    const index =
        currenSlide.value < slides.value.length - 1
            ? currenSlide.value + step
            : 0
    setCurrenSlide(index)
    direction.value = 'right'
}

const startSlideTimer = () => {
    slideInterval.value = setInterval(() => {
        const index =
            currenSlide.value < slides.value.length - 1
                ? currenSlide.value + 1
                : 0
        setCurrenSlide(index)
    }, 3000)
}

const swtchSlide = (index) => {
    const step = index - currenSlide.value
    if (step > 0) {
        next(step)
    } else {
        prev(step)
    }
}
onMounted(() => {
    //    startSlideTimer()
})

onBeforeMount(() => {
    // clearInterval(slideInterval.value)
})
</script>

<template>
    <div class="carousel">
        <div class="carousel__inner">
            <CarouselDots
                :total="slides.length"
                :currentIndex="currenSlide"
                @switch="swtchSlide($event)"
            />
            <CarouselItem
                v-for="(slide, index) in slides"
                :slide="slide"
                :key="index"
                :index="index"
                :currenSlide="currenSlide"
                :direction="direction"
            />

            <CarouselControls @prev="prev" @next="next" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.carousel {
    display: flex;
    justify-content: space-between;
    &__inner {
        position: relative;
        width: 900px;
        height: 400px;
        overflow: hidden;
        border-radius: 12px;
    }
}
</style>
