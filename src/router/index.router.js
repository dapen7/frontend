import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/page1',
    name: 'page1',
    component: () => import('@/views/Page1.vue'),
    meta: {
      title: 'page1'
    }
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach((to, from, failure) => {
  document.title = to.meta.title
})

export default router