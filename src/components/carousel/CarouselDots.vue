<script setup>
const props = defineProps({
    total: {
        type: Array,
        required: true,
    },
    currentIndex: {
        type: Number,
        default: 1,
    },
})
const emit = defineEmits(['switch'])
</script>

<template>
    <div class="carousel__dots">
        <button
            :class="[
                'carousel__dots__item',
                { carousel__dots__item_active: currentIndex === index },
            ]"
            v-for="(item, index) in total"
            :key="index"
            @click="emit('switch', index)"
        ></button>
    </div>
</template>

<style lang="scss" scoped>
.carousel__dots {
    position: absolute;
    z-index: 2;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    &__item {
        width: 15px;
        height: 15px;
        background: #959292;
        border: none;
        margin: 0.2em;
        opacity: 0.5;
        border-radius: 50%;
        cursor: pointer;
        &_active {
            opacity: 1;
        }
    }
}
</style>
