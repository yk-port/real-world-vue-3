import { createRouter, createWebHistory } from "vue-router";
import EventList from "@/views/EventList.vue";
import EventDetail from "@/views/EventDetail.vue";
import Form from "@/views/Form.vue";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: "/event/:id",
    name: "EventDetail",
    props: true,
    component: EventDetail,
  },
  {
    path: "/form",
    name: "Form",
    component: Form,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
