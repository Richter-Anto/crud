<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.1.0/css/v4-shims.min.css"
    integrity="sha512-p++g4gkFY8DBqLItjIfuKJPFvTPqcg2FzOns2BNaltwoCOrXMqRIOqgWqWEvuqsj/3aVdgoEo2Y7X6SomTfUPA=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <section class="allposts">
    <div v-for="(post, index) in allPosts" :key="index" class="posts">
      <h3>{{ allPosts[index].title }}</h3>
      <p>{{ allPosts[index].details }}</p>
      <div class="btn">
        <span @click="editPost(post.id)">Edit</span>
        <span @click="deletePost(post.id)"
          >Delete<font-awesome-icon icon="fa-solid fa-trash-can"
        /></span>
      </div>
    </div>
  </section>
</template>

<script>
import Axios from "@/apis/Axios";
import router from "@/router.js/router";
import { onMounted, reactive, toRefs } from "vue";

export default {
  name: "PostData",
  setup() {
    const state = reactive({
      allPosts: [],
    });
    onMounted(async () => {
      state.allPosts = (await Axios.get("/posts")).data;
    });
    async function editPost(id) {
      router.push(`/editpost/${id}`);
    }
    async function deletePost(id) {
      await Axios.delete(`/posts/${id}`);
      state.allPosts = (await Axios.get("/posts")).data;
    }
    return { ...toRefs(state), editPost, deletePost };
  },
};
</script>

<style scoped>
.allposts {
  padding: 10px;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}
.posts {
  background-color: rgb(231, 236, 231);
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
}
.posts h3 {
  font-style: italic;
}
.btn {
  display: flex;
  justify-content: flex-end;
}
.btn span {
  padding: 2px;
  border-radius: 5px;
  margin-left: 5px;
  cursor: pointer;
}
.btn span:first-child {
  background-color: blue;
}
.btn span:last-child {
  background-color: red;
}
</style>
