<template>
<div>
    <h1>Main</h1>
    <button @click="index()">点击以跳转到首页</button>
</div>
</template>

<script>
export default {
  methods: {
    index() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style scoped>
</style>
