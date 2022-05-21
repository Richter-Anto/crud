import PostData from "../components/PostData.vue"
import CreatePost from "../components/CreatePost.vue"
import EditPost from "../components/EditPost.vue";
import { createRouter, createWebHistory } from "vue-router";

let routes = [
  {
    path: "/",
    component: PostData,
  },
  {
    path: "/createpost",
    component: CreatePost,
  },
  {
    path: "/editpost/:id",
    component: EditPost,
  },
];

let router = createRouter({
    history: createWebHistory(),
    routes
})

export default router