<template>
<div>
    <router-link to="/user/Alan">Alan</router-link>
    <router-link to="/user/Bran">Bran</router-link>
    <br>
    你选择的是：{{$route.params.user_id}}
</div>
</template>

<script>
export default {
    
};
</script>

<style scoped>
</style>