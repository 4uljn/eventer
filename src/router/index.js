import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import EventDetail from "../views/EventDetail.vue";
import loginView from "../views/loginView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/event/:id",
    name: "event-detail",
    component: EventDetail,
    props: true,
  },
  {
    path: "/login",
    name: "login",
    component: loginView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // Imposta il colore di sfondo del corpo in base alla rotta corrente
  if (to.name === "home") {
    document.body.style.backgroundColor = "#F0F0F0"; // Colore di sfondo per la vista principale
  } else {
    document.body.style.backgroundColor = "black"; // Colore di sfondo per la vista "About"
  }

  next();
});

export default router;
