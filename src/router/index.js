import { createRouter, createWebHistory } from 'vue-router'
import MainCard from '../components/MainCard.vue'
import PostProjects from '../components/PostProjects.vue'
import ProjectsCard from '../components/ProjectsCard.vue'
import ResumeCard from '../components/ResumeCard.vue'

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
    path: '/resume',
    name: 'resume',
    component: ResumeCard
  },
  {
    path: '/post',
    name: 'Post',
    component: PostProjects
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
