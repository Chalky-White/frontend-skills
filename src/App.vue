<template>
  <div id="app">
    <div id="nav">
      <HomeButton />
    </div>
    <router-link to="/">Home</router-link>
    <router-view></router-view>
    <SubjectButton :title="algo" />

  </div>
</template>

<script>
import HomeButton from "./components/HomeButton.vue";
import SubjectButton from "./components/SubjectButton.vue";

export default {
  name: "app",
  components: {
    HomeButton,
    SubjectButton
  }
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-decoration: none;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
