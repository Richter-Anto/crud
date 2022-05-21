<template>
  <section class="fullpost">
    <article>
      <div>
        <h2>Your Posts</h2>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="title">Title :</label>
          <input
            type="text"
            placeholder="Enter the title"
            id="title"
            v-model="title"
          />
        </div>
        <div class="form-group">
          <label for="details">Details :</label>
          <input
            type="text"
            placeholder="Enter the details"
            id="details"
            v-model="details"
          />
        </div>
        <div class="form-group">
          <button>Submit</button>
        </div>
      </form>
    </article>
  </section>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import Axios from "@/apis/Axios";
import router from "@/router.js/router";

export default {
  name: "CreatePost",
  setup() {
    const state = reactive({
      title: "",
      details: ""
    });
    let handleSubmit = async () => {
      await Axios.post("/posts",state);
      router.push("/")
    };
  onMounted(()=>{document.getElementById("title").focus()})
    return {
      handleSubmit,
      ...toRefs(state),
    };
  },
};
</script>

<style scoped>
.fullpost{
  display: flex;
  justify-content: center;
  width: 100%;
}
.fullpost article{
  width: 40%;
  padding: 50px;
  background-color: rgb(228, 213, 213);
  border-radius: 10px;
  margin-top: 30px;
}
.fullpost article div h2{
  text-align: center;
}
.form-group{
  padding: 5px;
  display: flex;
  flex-direction: row;
  height: 30px;
}
.form-group label{
  font-size: 20px;
  width: 15%;
  display: flex;
  align-items: center;
}
.form-group input{
  justify-content: flex-end;
  width: 85%;
  margin-left: 10px;
}
button{
  width: 100%;
  background-color: rgb(69, 69, 179);
  border-radius: 10px;
  border: none;
  height: 35px;
  margin: 10px 0;
}
button:hover{
  background-color: blue;
}
</style>
