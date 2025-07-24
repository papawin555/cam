import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import InfoPage from '../views/InfoPage.vue';
import ContactPage from '../views/ContactPage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import UserListPage from '../views/UserListPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/info',
    name: 'Info',
    component: InfoPage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  },
  {
    path: '/users', name: 'Users', component: UserListPage 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;