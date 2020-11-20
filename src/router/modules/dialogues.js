export default {
  path: "/dialogues",
  name: "Dialogues",
  component: () => import("@/views/dialogues/DialogHome.vue"),
  children: [
    {
      path: ":dialogId(\\d+)",
      name: "SelectedDialog",
      component: () => import("@/views/dialogues/Dialog.vue"),
      props: true,
    },
  ],
};
