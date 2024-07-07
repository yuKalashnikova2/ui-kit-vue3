<script setup>
const props = defineProps({
    maxWidth: {
        type: String,
        default: '300px',
    },
    percent: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        default: '#42b883',
    },
})
</script>
<template>
    <div class="progress-container" :style="[{ 'max-width': maxWidth }]">
        <span class="progress-percent" :style="[{ color: `#35495e` }]"
            >{{ percent }}%</span
        >
        <div class="progress" :style="[{ background: `#646cff` }]">
            <div
                class="progress-bar"
                :style="[{ width: `${percent}%` }, { background: `#cdcff1` }]"
            ></div>
        </div>
    </div>
</template>

<style lang="scss">
.progress {
    height: 15px;
    border-radius: 4px;
    background-color: #42b883;
    &-container {
        margin-bottom: 20px;
        overflow: hidden;
    }
    &-bar {
        height: 100%;
        border-radius: 4px;
        transition: 0.5s;
    }
    &-percent {
        display: block;
        text-align: center;

        font-weight: bold;
        font-size: 17px;
        margin-bottom: 10px;
    }
}
</style>
