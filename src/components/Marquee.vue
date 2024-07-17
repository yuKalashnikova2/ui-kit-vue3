<script setup>
const props = defineProps({
    colorText: {
        type: String,
        default: '#FFF',
    },
    sizeText: {
        type: String,
        default: '2rem',
    },
})

const stylesMarquee = (color, size) => {
    return {
        'font-size': `${size}`,
        'color': `${color}`,
    }
}
</script>
<template>
    <div class="marquee" :style="stylesMarquee(colorText, sizeText)">
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped>
.marquee {
    width: 100%;
    white-space: nowrap;
    box-sizing: border-box;
    animation: marquee 15s linear infinite;
    line-height: 1.3;
    font-weight: bold;
    padding-top: 2rem;
    padding-bottom: 2rem;
}

@keyframes marquee {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(-100%);
    }
}
</style>
