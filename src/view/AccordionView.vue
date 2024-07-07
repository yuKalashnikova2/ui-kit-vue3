<script setup>
import { ref } from 'vue'
import Accordion from '../components/Accordion.vue'
import HeaderComponent from '../components/HeaderComponent.vue'
const questions = ref([
    {
        id: 1,
        title: 'Vue 3 Options API',
        info: 'Good question.',
    },
    {
        id: 2,
        title: 'Vue 3 Composition API',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eligendi quisquam vitae quos unde iure voluptatem dolores, asperiores molestiae iste pariatur expedita eveniet nesciunt facere iusto voluptatibus ipsa quas debitis? Iste recusandae omnis ipsum voluptatum doloribus. Fuga, eum! Reprehenderit, alias, voluptatum quae inventore perferendis consectetur ipsam iste voluptate libero, ab neque non veritatis fuga officia asperiores exercitationem provident facilis tempora?',
    }

])
</script>
<template>
    <section class="question__wrapper ml-70">
        <HeaderComponent title="Accordion" />
        <Accordion
            v-for="question in questions"
            :key="question.id"
            :title="question.title"
            :info="question.info"
        />



    </section>
</template>

<style scoped lang="scss">
.question__wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
   
}
</style>
 