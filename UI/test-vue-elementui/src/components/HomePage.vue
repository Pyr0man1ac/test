<template>
    <div class="container">
        <div class="nav">

        </div>
        <div class="context">

        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.context {
  display: -webkit-flex;
  display: flex;
}
.nav {
  -webkit-flex: 1;
  flex: 1;
  max-width: 17%;
  min-width: 15%;
  height: 650px;
  background-color: blue;
}

.context {
  -webkit-flex: 2;
  flex: 2;
  max-width: 83%;
  height: 650px;
  background-color: aqua;
}
</style>