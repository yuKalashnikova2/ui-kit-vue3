<script setup>
import { ref } from 'vue'

const modalClosed = ref(false)
</script>

<template>
    <Transition>
        <div class="modal" v-if="modalClosed">
            <div class="modal__inner">
                <button
                    class="button button__closed"
                    @click="modalClosed = !modalClosed"
                >
                    <img src="/modal_cancel.svg" alt="closed" />
                </button>
                <h3>Title Modal</h3>
                <span>Text modal</span>
            </div>
        </div>
    </Transition>
    <Transition>
        <div class="modal__show" v-if="!modalClosed">
            <button
                class="button button__show"
                @click="modalClosed = !modalClosed"
            >
                Show
            </button>
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    &__inner {
        min-width: 300px;
        background-color: #fff;
        border-radius: 8px;
        padding: 2rem;
        font-size: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    &__show {
        padding-top: 3rem;
    }
}
.button {
    background-color: #42b883;
    color: #fff;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px;
    &:hover {
        opacity: 0.8;
    }
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &__closed {
        position: absolute;
        top: 5px;
        right: 5px;
        width: 30px;
        height: 30px;
    }
    &__show {
        width: 150px;
        font-size: 2rem;
    }
}
.v-leave-active {
    transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
