<script setup>
import One from './One.vue'
import Two from './Two.vue'
import Three from './Three.vue'
import { ref } from 'vue'

const currentTab = ref('One')

const tabs = {
    One,
    Two,
    Three
}
</script>

<template>
    <div class="tabs">
        <button v-for="(_, tab) in tabs"
        :key="tab"
        :class="['tabs__button', { 'tabs__button_active': currentTab === tab}]"
        @click="currentTab = tab">
        {{ tab }}
        </button>
        <component :is="tabs[currentTab]" class="tabs__tab"></component>
    </div>
</template>

<style lang="scss" scoped>
    .tabs {
        border-radius: 8px;
        max-width: 1000px;
        font-size: 20px;
        &__button {
            padding: 6px 10px;
            border: 1px solid #42b883;
            font-size: 20px;
            cursor: pointer;
            padding: 20px 30px;
            margin-bottom: -1px;
            margin-right: 1px;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            transition: all .3s ease;
            &_active {
                background-color: #42b883;
            }
        }
        &__tab {
            padding: 10px;
            border: 1px solid #42b883;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            border-top-right-radius: 8px;
        }
    }
</style>