import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
  },
  {
    path: "/amazon",
    name: "Amazon",
    component: () => import("@/views/Amazon"),
  },
  {
    path: "/assassin",
    name: "Assassin",
    component: () => import("@/views/Assassin"),
  },
  {
    path: "/barbarian",
    name: "Barbarian",
    component: () => import("@/views/Barbarian"),
  },
  {
    path: "/druid",
    name: "Druid",
    component: () => import("@/views/Druid"),
  },
  {
    path: "/necromancer",
    name: "Necromancer",
    component: () => import("@/views/Necromancer"),
  },
  {
    path: "/paladin",
    name: "Paladin",
    component: () => import("@/views/Paladin"),
  },
  {
    path: "/sorceress",
    name: "Sorceress",
    component: () => import("@/views/Sorceress"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
