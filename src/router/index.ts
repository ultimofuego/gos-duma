import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ContentPage from '../components/AdminPageComponents/content-page.vue'
import Template2x2 from '../components/templates/template-2x2.vue'
import Template2x1 from '../components/templates/template-2x1.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: ContentPage
    },
    {
        path: '/:id',
        name: 'template-2x2',
        component: Template2x2
    },
    {
        path: '/:id',
        name: 'template-2x1',
        component: Template2x1
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router