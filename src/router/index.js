import Vue from "vue";
import VueRouter from "vue-router";
import Catalog from "./../components/v-catalog/index.vue";
import Cart from "./../components/v-cart/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "catalog",
    component: Catalog
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
