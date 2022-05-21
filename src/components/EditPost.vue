<template>
  <section class="fullpost">
    <article>
      <div>
        <h2>Edit Your Posts</h2>
        <p>{{ $route.params.id }}</p>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            placeholder="Enter the title"
            id="title"
            v-model="title"
          />
        </div>
        <div class="form-group">
          <label for="details">Details</label>
          <input
            type="text"
            placeholder="Enter the details"
            id="details"
            v-model="details"
          />
        </div>
        <div class="form-group">
          <button>Update</button>
        </div>
      </form>
    </article>
  </section>
</template>

<script>
// import { onMounted, reactive, ref, toRefs } from "vue";
import Axios from "@/apis/Axios";
import router from "@/router.js/router";

export default {
  name: "EditPost",
  data() {
    return {
      editIdv2 : Number,
      title : '',
      details: ''
    }
  },
  async mounted(){
    this.editIdv2 = parseInt(`${this.$route.params.id}`)
    let alldata = (await Axios.get("/posts")).data;
      for (let i = 0; i < alldata.length; i++) {
        if (alldata[i].id == this.editIdv2) {
          this.title = alldata[i].title;
          this.details = alldata[i].details;
        }
      }
      document.getElementById("title").focus();
  },
  methods: {
    handleSubmit : async () => {
      let payload = {title : this.title, details: this.details}
      await Axios.put(`/posts/${this.editIdv2}`, payload);
      router.push("/");
    }
  },
  setup() {
    // const state = reactive({
    //   title: "",
    //   details: "",
    // });
    // let editId = ref();
    // onMounted(async () => {
    //   console.log(`${this.$route.params.id}`);
    //   editId.value = parseInt(window.location.pathname.slice(10,));
    //   let alldata = (await Axios.get("/posts")).data;
    //   for (let i = 0; i < alldata.length; i++) {
    //     if (alldata[i].id == editId.value) {
    //       state.title = alldata[i].title;
    //       state.details = alldata[i].details;
    //     }
    //   }
    //   document.getElementById("title").focus();
    // });
    // let handleSubmit = async () => {
    //   await Axios.put(`/posts/${editId.value}`, state);
    //   router.push("/");
    // };

    // return {
    //   handleSubmit,
    //   ...toRefs(state),
    //   editId,
    // };
  },
};
</script>

<style scoped>
.fullpost {
  display: flex;
  justify-content: center;
  width: 100%;
}
.fullpost article {
  width: 40%;
  padding: 50px;
  background-color: rgb(228, 213, 213);
  border-radius: 10px;
  margin-top: 30px;
}
.fullpost article div h2 {
  text-align: center;
}
.form-group {
  padding: 5px;
  display: flex;
  flex-direction: row;
  height: 30px;
}
.form-group label {
  font-size: 20px;
  width: 15%;
  display: flex;
  align-items: center;
}
.form-group input {
  justify-content: flex-end;
  width: 85%;
  margin-left: 10px;
}
button {
  width: 100%;
  background-color: rgb(69, 69, 179);
  border-radius: 10px;
  border: none;
  height: 35px;
  margin: 10px 0;
}
button:hover {
  background-color: blue;
}
</style>
