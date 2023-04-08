import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: LandingView,
    },
    {
      path: "/home",
      name: "home",
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/calories",
      name: "calories",
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CaloriesView.vue"),
    },
    {
      path: "/exercise",
      name: "exercise",
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ExerciseView.vue"),
    },
    {
      path: "/about",
      name: "about",
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ]
})

export default router
