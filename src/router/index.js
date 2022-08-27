import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'auth.login',
    component: () => import(/* webpackChunkName: "login" */ '../views/auth/Login.vue')
  },
  {
    path: '/post/new',
    name: 'post.new',
    component: () => import(/* webpackChunkName: "newPost" */ '../views/post/New.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/post',
    name: 'post.index',
    component: () => import(/* webpackChunkName: "post index" */ '../views/post/Index.vue'),
  },
  {
    path: '/post/:subjectSlug/:postSlug',
    name: 'post.show',
    component: () => import(/* webpackChunkName: "post show" */ '../views/post/Show.vue'),
  },
  {
    path: '/subject/:subjectSlug',
    name: 'subject.show',
    component: () => import(/* webpackChunkName: "subject show" */ '../views/subject/Show.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.auth && !store.getters['auth/authenticated']) next({ name: 'auth.login'})
  else next()

  if(to.name == 'auth.login' && store.getters['auth/authenticated']) next({ name: 'home'})
  else next()
})

export default router
