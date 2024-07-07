<script setup>
import { ref } from 'vue'
import ProgressBar from '../components/ProgressBar.vue'
import HeaderComponent from '../components/HeaderComponent.vue'

const percent = ref(15)

const addPercent = () => {
    percent.value += 10
    if (percent.value > 100) {
        percent.value = 0
    }
}
</script>
<template>
    <div class="ml-70">
        <HeaderComponent title="Progress Bar" />

        <ProgressBar maxWidth="1000px" :percent="percent" color="success" />
        <button class="button__progress" label="add 10%" @click="addPercent">
            Add
        </button>
    </div>
</template>

<style lang="scss" scoped>
.button__progress {
    width: 8rem;
    padding: 1rem;
    background-color: #646cff;
    border-radius: 8px;
    color: #fff;
    font-size: 22px;
    cursor: pointer;
    &:hover {
        opacity: 0.9;
    }
}
</style>
