<script setup>
import { ref } from 'vue'

const list = ref(['Home', 'About', 'Services', 'Blog', 'Contact'])

const isVisible = ref(false)
</script>

<template>
    <h2>Burger</h2>
    <div class="burger__wrapper">
        <header class="burger__header">
            <div
                class="burger__button"
                :class="{ open: isVisible }"
                @click="isVisible = !isVisible"
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
        <Transition>
            <nav class="burger__nav" v-if="isVisible">
                <ul class="burger__list">
                    <li class="burger__item" v-for="lis in list">
                        {{ lis }}
                    </li>
                </ul>
            </nav>
        </Transition>
    </div>
</template>

<style lang="scss" scoped>
.burger {
    &__wrapper {
        overflow-y: hidden;
        border-radius: 8px;
    }
    &__header {
        background-color: #646cff;
        padding: 20px 10px;
        z-index: 4;
        overflow-y: hidden;
        position: relative;
    }
    &__nav {
        background-color: #cdcff1;
        display: flex;
        justify-content: center;
        padding: 20px;
        height: auto;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        z-index: 5;
    }
    &__list {
        display: flex;
        list-style: none;
        flex-direction: column;
        width: 100%;
    }
    &__item {
        padding: 10px 20px;
        margin-bottom: 10px;
        box-shadow: 4px 0px 3px 4px rgba(0, 0, 0, 0.2);
    }
    &__button {
        display: flex;

        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 5;
        align-items: center;
        border: none;
        outline: none;
        width: 30px;
        height: 20px;
        cursor: pointer;
        span {
            display: block;
            position: absolute;
            background-color: aliceblue;
            width: 30px;
            height: 2px;
            left: 5px;
            &:nth-child(1) {
                // background-color: blueviolet;
                transform: translateY(10px);
                transition: background cubic-bezier(0.075, 0.82, 0.165, 1),
                    opacity 0.3s, transform 0.4s;
            }

            &:nth-child(3) {
                transform: translateY(-10px);
                transition: background cubic-bezier(0.075, 0.82, 0.165, 1),
                    opacity 0.3s, transform 0.4s;
            }
        }
    }
}
.open {
    & span {
        &:nth-child(1) {
            transform: translateY(0) rotate(45deg);
        }
        &:nth-child(2) {
            opacity: 0;
        }
        &:nth-child(3) {
            transform: translateY(0) rotate(-45deg);
        }
    }
}
.v-enter-active,
.v-leave-active {
    transform: translateY(0);
    transition: 0.6s ease;
}

.v-enter-from,
.v-leave-to {
    transform: translateY(-100%);
}
</style>
