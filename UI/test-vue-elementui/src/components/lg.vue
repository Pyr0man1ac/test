<template>
    <el-form :model="login" label-width="100px" class="login">
      <el-form-item label="账号">
          <el-input v-model="login.account" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码">
          <el-input v-model="login.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-checkbox v-model="login.checked">记住密码</el-checkbox>
      <el-form-item>
          <el-button type="primary" @click="submit()">登录</el-button>
          <el-button @click="reset()">重置</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
export default {
    data(){
        return{
            login:{
                account:'',
                password:'',
                checked:true
            }
        };
    },

    methods:{
        submit(){
            console.log("Submit!!!");
        },

        reset(){
            console.log("Reset!!!");
        }
    }
}
</script>

<style scoped>

</style>