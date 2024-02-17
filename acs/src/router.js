import Vue from "vue";

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved
import VueRouter from "vue-router";

import KanbanBoard from "./components/KanbanBoard.vue";
import ProfileDetails from "./components/ProfileDetails.vue";

Vue.use(VueRouter);

const routes = [
  { path: '/', component: KanbanBoard },
  { path: '/profile/:id', component: ProfileDetails, props: true },
];

const router = new VueRouter({
  routes,
});

export default router;
