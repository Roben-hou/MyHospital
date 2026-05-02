import { createRouter, createWebHistory } from "vue-router";
export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: () => import('@/pages/home/Home.vue')
        },
        {
            path: '/hospital',
            component: () => import('@/pages/hospital/Hospital.vue')
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
})