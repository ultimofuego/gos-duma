import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainAdminPage from '../components/AdminPageComponents/main-admin-page.vue'
import Template2x2 from '../components/templates/template-2x2.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: MainAdminPage
    },
    {
        path: '/:id',
        name: 'template-2x2',
        component: Template2x2
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router