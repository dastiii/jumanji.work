import Vue from "vue";
import VueRouter from "vue-router";
import Jobs from "../views/Jobs.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Jobs",
    component: Jobs
  },
];

const router = new VueRouter({
  routes
});

export default router;
