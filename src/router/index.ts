import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import test from "../views/test.jsx";
const routes: Array<any> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/test",
    name: "Test",
    component: test,
  },
  {
    path: "/gossip",
    name: "gossip",
    component: () => import("../views/three/gossip.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
