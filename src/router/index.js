import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../view/HomeView.vue'
import PaginationView from '../view/PaginationView.vue'
import CarouselView from '../view/CarouselView.vue'
import InputDubbleView from '../view/InputDubbleView.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: HomeView },
        { path: '/paginationview', component: PaginationView },
        { path: '/carouselview', component: CarouselView },
        { path: '/inputdubbleview', component: InputDubbleView },
    ],
})

export default router
