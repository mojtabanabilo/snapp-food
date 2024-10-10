import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import('../pages/Main.vue')
    },
    {
      path: "/sign-in",
      component: () => import("../pages/SignIn.vue"),
    },
    {
      path: "/sign-up",
      component: () => import("../pages/SignUp.vue"),
    },
  ],
});

export default router;
