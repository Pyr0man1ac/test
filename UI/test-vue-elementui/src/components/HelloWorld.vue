<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>点击下方Form跳转到Form界面</h1>
    <router-link to="/form">Form</router-link>
    <!-- <a href="http://localhost:8080/#/form">{{message}}</a> -->
    <h1>点击下方Login跳转到Login界面</h1>
    <router-link to="/login">Login</router-link>
    <!-- <button @click="login()">Login</button> -->
    <h1>点击下方User跳转到User界面</h1>
    <router-link to="/user">User</router-link>
    <h1>点击下方Radio跳转到Radio界面</h1>
    <router-link to="/radio">Radio</router-link>
    <h1>点击下方CheckBox跳转到CheckBox界面</h1>
    <router-link to="/check">CheckBox</router-link>
    <div class="fixed">
      <a href="http://localhost:8080/#/doc">查看文档</a> 
    </div>
     </div>
</template>

<script>
export default {
  name: "HelloWorld",
  components: {

  },
  data() {
    return {
      // 'message-form': "Form",
      // 'message-login':"Login"
    };
  },

  methods: {
    form() {
      this.$router.push({ path: "/form" });
    },

    login() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}

.fixed {
  position: fixed;
  color: #42b983;
  max-width: 100px;
  height: 30px;
  right: 0;
  bottom: 0;
  padding: 5px;
  /* background-color: aqua; */
}
</style>
