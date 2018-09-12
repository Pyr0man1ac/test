<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
    <div class="back2index">
      <a href="http://localhost:8080/#/">返回首页</a>
      <!-- <router-link to="/">返回首页</router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.back2index {
  position: fixed;
  color: #42b983;
  max-width: 100px;
  height: 30px;
  left: 0;
  bottom: 0;
  padding: 5px;
  text-align: center;
  // background-color: aqua; 
}

a {
  color: #42b983;
}
</style>
