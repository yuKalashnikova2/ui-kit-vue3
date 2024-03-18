import {  createRouter, createWebHistory } from 'vue-router'

import HomeView from '../view/HomeView.vue'
import PaginationView from '../view/PaginationView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: HomeView },
  { path: '/paginationview', component: PaginationView },
    ]
})

export default router

// const routes = [
//   { path: '/', component: HomeView },
//   { path: '/paginationpage', component: PaginationView },
// ]

// const router = createRouter({
//   history: createMemoryHistory(),
//   routes,
// })
// export default router