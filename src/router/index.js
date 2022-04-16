import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'
import AboutView from '../views/AboutView/AboutView.vue'
import MovieDetailView from '../views/MovieDetailView/MovieDetailView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/movie-detail/:id', name: 'movieDetail', component: MovieDetailView },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
