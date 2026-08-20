import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Gift1View from '../views/Gift1View.vue'
import PhotosView from '../views/PhotosView.vue'

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/gift/1',
            name: 'gift-1',
            component: Gift1View,
        },
        {
            path: '/photos',
            name: 'photos',
            component: PhotosView,
        },
    ],

    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }

        return {
            top: 0,
            behavior: 'smooth',
        }
    },
})

export default router
