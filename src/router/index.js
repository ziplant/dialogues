import { createRouter, createWebHashHistory } from "vue-router";
import dialogues from "./modules/dialogues";

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: () => {
      return { path: "/dialogues" };
    },
  },
  dialogues,
  {
    path: "/:catchAll(.*)*",
    name: "NotFound",
    redirect: () => {
      return { path: "/" };
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
