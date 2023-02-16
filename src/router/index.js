import { createRouter, createWebHistory } from 'vue-router'
import MainCard from '../components/MainCard.vue'
import PostProject from '../components/PostProject.vue'
import ProjectsCard from '../components/ProjectsCard.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainCard
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsCard
  },
  {
    path: '/post',
    name: 'Post',
    component: PostProject
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
