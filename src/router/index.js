import { createRouter, createWebHashHistory } from 'vue-router'

function lazyLoad (view) {
  return () => import('../views/' + view + '.vue')
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: lazyLoad('Home')
  },
  {
    path: '/about',
    name: 'About',
    component: lazyLoad('About')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: lazyLoad('Portfolio')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: lazyLoad('Contact')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
