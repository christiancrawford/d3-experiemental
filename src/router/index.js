import Vue from "vue";
import VueRouter from "vue-router";
import HellowWorld from "../components/HelloWorld.vue";
import BarChart from "../components/BarChart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "helloworld",
    component: HellowWorld
  },
  {
    path: "/barchart",
    name: "barchart",
    component: BarChart
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
