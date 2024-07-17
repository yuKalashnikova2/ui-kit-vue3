<script setup>
import { ref, onMounted } from 'vue'
const maxValue = ref(100)
const minValue = ref(0)
const minGap = ref(10)
const valueOne = ref(30)
const valueTwo = ref(70)

const oneSlide = () => {
    if(valueTwo.value - valueOne.value <= minGap.value) {
        valueOne.value = valueTwo.value - minGap.value
    }
    fillColor()
    console.log('первый слайд тут', valueOne.value)
}
const twoSlide = () => {
    if(valueTwo.value - valueOne.value <= minGap.value) {
        valueTwo.value = valueOne.value + minGap.value
    }
    fillColor()
    console.log('второй слайд тут', valueTwo.value)
}

const percent1 = ref(0)
const percent2 = ref(0)
function fillColor() {
   percent1.value = (valueOne.value / maxValue.value) * 100
    console.log(valueOne.value , 'что тцт')
   percent2.value = Math.min((valueTwo.value / maxValue.value) * 100, 100)
}

onMounted(() => {
    oneSlide()
    twoSlide()
})
</script>

<template>
    <div class="wrapper">
        <div class="values">
            <span id="range1">{{ valueOne }}</span>
            <span> &dash; </span>
            <span id="range2">{{ valueTwo }}</span>
        </div>
        <div class="inputs-content">
            <div class="track-input"
            :style = "{background: `linear-gradient(to right, #dadae5 ${percent1}%, #535bf2 ${percent1}%, #535bf2 ${percent2}%, #dadae5 ${percent2}% )`}"></div>
            <input type="range" v-model="valueOne" :min="minValue" :max="maxValue"  @input="oneSlide"/>
            <input type="range" v-model="valueTwo" :min="0" :max="maxValue" @input="twoSlide" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    position: relative;
    width: 100vmin;
    padding: 50px 40px 20px 40px;
}
.inputs-content {
    background-color: #fff;
    border-radius: 8px;
    position: relative;
    width: 100%;
    height: 100px;
    margin-top: 30px;
    top: 0;
    bottom: 0;
}
.values {
    background: #535bf2;
    color: #fff;
    font-weight: 600;
    text-align: center;
    padding: 30px;
    border-radius: 5px;
    width: 32%;
    position: relative;
    margin: auto;
    font-size: 20px;
    @media(max-width: 768px) {
        width: 100%;
    }
}
/* создание треугольничка */
.values::before {
    content: '';
    position: absolute;
    height: 0;
    width: 0;
    border-top: 15px solid #535bf2;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    bottom: -15px;
    left: 0;
    right: 0;
    margin: auto;
}
input[type='range'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    outline: none;
    margin: auto;
    pointer-events: none;
    background-color: transparent;
    margin-top: -15px;
}
.track-input {
    position: absolute;
    height: 5px;
    background: #d5d5d5;
    width: 100%;
    top: 0;
    bottom: 0;
    margin: auto;
    border-radius: 5px;
}
input[type='range']::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    height: 5px;
}
input[type='range']::-moz-range-track {
    -moz-appearance: none;
    height: 5px;
}
input[type='range']::-ms-track {
    appearance: none;
    height: 5px;
}
input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 1.7em;
    width: 1.7em;
    background-color: #535bf2;
    cursor: pointer;
    border-radius: 50%;
    pointer-events: auto;
}
input[type='range']::-moz-range-thumb {
    -moz-appearance: none;
    height: 1.7em;
    width: 1.7em;
    background-color: #535bf2;
    cursor: pointer;
    border-radius: 50%;
    pointer-events: auto;
}
input[type='range']::-ms-thumb {
    appearance: none;
    height: 1.7em;
    width: 1.7em;
    background-color: #535bf2;
    cursor: pointer;
    border-radius: 50%;
    pointer-events: auto;
}
input[type='range']:active::-webkit-slider-thumb {
    background-color: #fff;
    border: 3px solid #535bf2;
}
</style>
