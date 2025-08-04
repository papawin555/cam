import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import InfoPage from '../views/InfoPage.vue'
import ContactPage from '../views/ContactPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import UserListPage from '../views/UserListPage.vue'
import CameraPage from '../views/CameraPage.vue'  // เพิ่มตรงนี้

const routes = [
  { path: '/', component: HomePage },
  { path: '/info', component: InfoPage },
  { path: '/contact', component: ContactPage },
  { path: '/register', component: RegisterPage },
  { path: '/users', component: UserListPage },
  { path: '/camera', component: CameraPage },  // เพิ่ม route สำหรับ CameraPage
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
