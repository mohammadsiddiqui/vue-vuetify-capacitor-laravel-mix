import Vue from "vue";
import VueRouter from "vue-router";
import Users from "../views/Users.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Users",
    component: Users,
  },
  {
    path: "/albums/:id",
    name: "Albums",
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/Albums.vue");
    },
  },
  {
    path: "/photos/:id",
    name: "Photos",
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/Photos.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
