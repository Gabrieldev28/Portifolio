import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/profile', name: 'profile', component: ProfileView },
  { path: '/projects', name: 'projects', component: ProjectsView },
  { path: '/contact', name: 'contact', component: ContactView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router