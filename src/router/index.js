import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../view/HomeView.vue'
import PaginationView from '../view/PaginationView.vue'
import CarouselView from '../view/CarouselView.vue'
import InputDubbleView from '../view/InputDubbleView.vue'
import BurgerView from '../view/BurgerView.vue'
import AccordionView from '../view/AccordionView.vue'
import MarqueeView from '../view/MarqueeView.vue'
import ModalView from '../view/ModalView.vue'
import ProgressView from '../view/ProgressView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: HomeView },
        { path: '/paginationview', component: PaginationView },
        { path: '/carouselview', component: CarouselView },
        { path: '/inputdubbleview', component: InputDubbleView },
        { path: '/burgerview', component: BurgerView },
        { path: '/accordionview', component: AccordionView },
        { path: '/marqueeview', component: MarqueeView },
        { path: '/modalview', component: ModalView },
        { path: '/progressview', component: ProgressView },
    ],
})

export default router
