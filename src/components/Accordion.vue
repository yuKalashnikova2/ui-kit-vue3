<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
    title: {
        type: String,
        default: 'Тема вопроса',
    },
    info: {
        type: String,
        default: 'Текст вопроса',
    },
})

const expanded = ref(false)
const contentStyle = computed(() => {
    return { 'max-height': expanded.value ? '150px' : 0 }
})

const infoStyle = computed(() => {
    return { opacity: expanded.value ? 1 : 0 }
})
</script>
<template>
    <article class="question">
        <header>
            <h4 @click="expanded = !expanded" class="question-title">
                {{ title }}
            </h4>
            <div
                class="question__arrow"
                :class="{ 'question__arrow--open': expanded }"
                @click="expanded = !expanded"
            >
                <img src="/downarrow.svg" alt="" />
            </div>
        </header>
        <div :style="contentStyle" class="content">
            <p :style="infoStyle" class="info">{{ info }}</p>
        </div>
    </article>
</template>

<style scoped lang="scss">
.question {
    background-color: #cdcff1;
    padding: 20px;
    border-radius: 2rem !important;
    color: #1e293b;
    height: auto;
}

.question p {
    margin-bottom: 0;
    // margin-top: 0.5rem;
}
.question header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.question-title {
    cursor: pointer;
    color: #1e293b;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 0.5;
    // @media (min-width: 992px) and (max-width: 1400px) {
    //     font-size: calc( 1.525rem + (2.5 - 1.525) * ((100vw - 62rem) / (87 - 62)));
    //     line-height: calc( 1.4 * (1.525rem + (2.5 - 1.525) * ((100vw - 62rem) / (87 - 62))));
    // }
    // @media(max-width: 768px) {
    //     font-size: calc( 1.525rem + (2.5 - 1.525) * ((100vw - 20rem) / (48 - 20)));
    //     line-height: calc( 1.4 * (1.525rem + (2.5 - 1.525) * ((100vw - 20rem) / (48 - 20))));
    // }
 
}

.content {
    max-height: 0;
    transition: max-height 0.2s ease-out;
}
.info {
    z-index: -1;
    opacity: 0;
    transition: opacity 0.2s ease-out;
    font-size: 1.3rem;
    line-height: 1.3;
    // @media (min-width: 992px) and (max-width: 1400px) {
    //     font-size: calc( 1.14rem + (1.4 - 1.14) * ((100vw - 62rem) / (87 - 62)));
    //     line-height: calc( 1.4 * (1.14rem + (1.4 - 1.14) * ((100vw - 62rem) / (87 - 62))));
    // }
    // @media(max-width: 768px) {
    //     font-size: calc( 1.14rem + (1.4 - 1.14) * ((100vw - 20rem) / (48 - 20)));
    //     line-height: calc( 1.4 * (1.14rem + (1.4 - 1.14) * ((100vw - 20rem) / (48 - 20))));
    // }
    }


.question__arrow {
    width: 27px;
    height: 20px;
    cursor: pointer;
    transition: transform 0.3s;
    & img {
        width: 100%;
        height: 100%;
    }
    &--open {
        transform: rotate(180deg);
        transition: transform 0.3s;
    }
}
</style>
