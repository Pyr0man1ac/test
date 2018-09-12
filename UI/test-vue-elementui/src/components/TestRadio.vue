<template>
    <div class="radio">
        <h1 class="title">Radio</h1>
        <el-radio v-model="radio" label="radio1">可选选项1</el-radio>
        <el-radio v-model="radio" label="radio2">可选选项2</el-radio>
        <el-radio disabled="true" v-model="radio1" label="radio3">禁用选项3</el-radio>
        <!-- <el-radio label="radio3">禁用以上2个选项</el-radio> -->
        <hr>
        <!-- data{
            radio2:5
        } -->
        <el-radio-group v-model="radioGroup1">
            <el-radio :label="3">选项1</el-radio>
            <el-radio :label="5">选项2</el-radio>
            <el-radio :label="7">选项3</el-radio>
        </el-radio-group>
        <br>
        <!-- data{
            radio3:'radio7'
        } -->
        <el-radio-group v-model="radioGroup2">
            <el-radio label="radio3">选项1</el-radio>
            <el-radio label="radio5">选项2</el-radio>
            <el-radio label="radio7">选项3</el-radio>
        </el-radio-group>
        <hr>medium
        <el-radio-group v-model="radioButton1" size="medium">
            <el-radio-button label="1">按钮选项A</el-radio-button>
            <el-radio-button label="2">按钮选项B</el-radio-button>
            <el-radio-button label="3">按钮选项C</el-radio-button>
            <el-radio-button label="4">按钮选项D</el-radio-button>
        </el-radio-group>
        <br><br>
        <el-radio-group v-model="radioButton2">
            <el-radio-button label="按钮选项a"></el-radio-button>
            <el-radio-button label="按钮选项b"></el-radio-button>
            <el-radio-button label="按钮选项c"></el-radio-button>
            <el-radio-button label="按钮选项d"></el-radio-button>
        </el-radio-group>
        <br><br>small
        <el-radio-group v-model="radioButton3" size="small">
            <el-radio-button label="1">按钮选项A</el-radio-button>
            <el-radio-button label="2">按钮选项B</el-radio-button>
            <el-radio-button label="3">按钮选项C</el-radio-button>
            <el-radio-button label="4">按钮选项D</el-radio-button>
        </el-radio-group>
        <br><br>mini
        <el-radio-group v-model="radioButton4" size="mini">
            <el-radio-button label="按钮选项a"></el-radio-button>
            <el-radio-button label="按钮选项b"></el-radio-button>
            <el-radio-button label="按钮选项c"></el-radio-button>
            <el-radio-button label="按钮选项d"></el-radio-button>
        </el-radio-group>
        <hr>
        <el-radio-group v-model="radioBorder">
            <el-radio :label="1" border="">边框选项1</el-radio>
            <el-radio :label="2" border="">边框选项2</el-radio>
            <el-radio :label="3" border="">边框选项3</el-radio>
        </el-radio-group>
    </div>
</template>
<script>
export default {
  data() {
    return {
      radio: "radio2",

      radioGroup1: 5,
      radioGroup2: "radio7",

      radioButton1: "1",
      radioButton2: "b",
      radioButton3: "3",
      radioButton4: "d",

      radioBorder: 2
      // disable:{
      //     type:boolean,
      //     value:true
      // }
    };
  }
};
</script>
<style lang="scss" scoped>
.radio {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 650px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
}
</style>