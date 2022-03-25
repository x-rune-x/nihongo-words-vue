import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Add from '../views/Add.vue'
import Login from '../views/Login.vue'
import { projectAuth } from '../firebase/config'

// route guard
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  console.log('Current auth guard user is: ', user)

  if (!user) {
    next({ name: 'Home' })
  }
  else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'Add',
    component: Add,
    beforeEnter: requireAuth
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
