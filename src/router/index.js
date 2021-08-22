import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SearchedList from "../components/SearchedList.vue"
import SelectedGif from "../components/GiphyTask/SelectedGif.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path : "/search/:query",
    name : "SearchedList",
    component : SearchedList,

  },
  {
    path : "/selected/:id",
    name : "SelectedGif",
    component : SelectedGif,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
