import Vue from 'vue';
import VueRouter from 'vue-router';
import Catalog from '@/views/catalog.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Каталог',
    component: Catalog,
  },
  {
    path: '/delivery',
    name: 'Доставка',
  },
  {
    path: '/payment',
    name: 'Оплата',
  },
  {
    path: '/contacts',
    name: 'Контакты',
  },
  {
    path: '/about',
    name: 'О галерее',
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
