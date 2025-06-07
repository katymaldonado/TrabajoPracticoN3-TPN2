import { createRouter, createWebHistory } from 'vue-router'
import Formulario from './components/Formulario/index.vue'
import ListaUsuarios  from './components/ListaUsuarios.vue'
import Home from './Home.vue'


const routes = [
    { path: '/', redirect: '/home'},
    { path: '/home',component: Home },
    { path: '/formulario', component: Formulario },
    { path: '/lista-usuarios', component: ListaUsuarios },

    { path: '/:pathmatch(.*)*', redirect: '/home' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router