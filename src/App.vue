<template>
  <section class="navbar">
    <article>
      <span><router-link to="/" class="router">Post Data</router-link></span>
      <span><router-link to="/createpost" class="router">Create Post</router-link></span>
    </article>
  </section>

  <router-view></router-view>
</template>

<script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.1.0/css/v4-shims.min.css" integrity="sha512-p++g4gkFY8DBqLItjIfuKJPFvTPqcg2FzOns2BNaltwoCOrXMqRIOqgWqWEvuqsj/3aVdgoEo2Y7X6SomTfUPA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

export default {
  name: "App",
};
</script>

<style>

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.navbar{
  width: 100%;
  display: flex;
  justify-content: center;
    background-color: yellowgreen;
}
.navbar article{
  width: 90%;
  height: 70px;
  display: flex;
  align-items: center;
}
.navbar article span{
  display: inline-block;
  height: inherit;
  width: 10%;
  text-align: center;
  padding: 22px 0;
  font-size: 18px;
}
.router{
  text-decoration: none;
  color: blue;
  font-weight: 600;
}
.navbar article span:hover{
  background-color: rgb(99, 215, 91);
}
</style>
