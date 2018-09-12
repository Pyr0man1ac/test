<template>
    <div class="checkbox">
        <h1 class="title">checkbox复选框/多选框</h1>
        <el-checkbox v-model="checked1">可选多选框1</el-checkbox>
        <el-checkbox v-model="checked2">可选多选框2</el-checkbox>
        <el-checkbox disabled="" v-model="checked3">禁用多选框3</el-checkbox>
        <el-checkbox disabled="" v-model="checked4">禁用多选框4</el-checkbox>
        <hr><!-- ------------------------------------------------------------------------------------------------------------ -->
        <el-checkbox-group v-model="checkGroup">
            <el-checkbox label="可用复选框1"></el-checkbox>
            <el-checkbox label="可用复选框2"></el-checkbox>
            <el-checkbox disabled="" label="禁用复选框3"></el-checkbox>
            <el-checkbox disabled="" label="禁用复选框4"></el-checkbox>
        </el-checkbox-group>
        <hr><!-- ------------------------------------------------------------------------------------------------------------ -->
        <el-checkbox indeterminate="isIndeterminate" v-model="checkAll" label="全选" @change="handleCheckAllChange"/>
        <br><br>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :key="city.id" :label="city"></el-checkbox>
        </el-checkbox-group>
        <hr><!-- ------------------------------------------------------------------------------------------------------------ -->
        <!-- 最多3项，最少1项 -->
        <el-checkbox-group v-model="checkedMaxMin" :min="1" :max="3">
        <el-checkbox v-for="city in cities" :key="city.id" :label="city"></el-checkbox>
        </el-checkbox-group>
        <hr><!-- ------------------------------------------------------------------------------------------------------------ -->
        <el-checkbox-group v-model="checkedButton">
            <el-checkbox-button v-for="city in cities" :key="city.id" :label="city"></el-checkbox-button>
        </el-checkbox-group>
        <el-checkbox-group v-model="checkedButton" size="medium">
            <el-checkbox-button v-for="city in cities" :key="city.id" :label="city"></el-checkbox-button>
        </el-checkbox-group>
        <el-checkbox-group v-model="checkedButton" size="small">
          <!-- 多个复选框禁用可用"||"连接多个条件 -->
            <el-checkbox-button :disabled="city === '上海'||city ==='北京'" v-for="city in cities" :key="city.id" :label="city"></el-checkbox-button>
        </el-checkbox-group>
        <el-checkbox-group disabled v-model="checkedButton" size="mini">
            <el-checkbox-button v-for="city in cities" :key="city.id" :label="city"></el-checkbox-button>
        </el-checkbox-group>
        <hr><!-- ------------------------------------------------------------------------------------------------------------ -->
          <el-checkbox v-model="checkedBorder1" label="复选框1" border=""></el-checkbox>
          <el-checkbox v-model="checkedBorder2" label="复选框2" border=""></el-checkbox>
          <el-checkbox v-model="checkedBorder3" label="复选框3" border=""></el-checkbox>
          <br>
          <el-checkbox v-model="checkedBorder1" label="复选框1" border="" size="medium"></el-checkbox>
          <el-checkbox v-model="checkedBorder2" label="复选框2" border="" size="medium"></el-checkbox>
          <el-checkbox v-model="checkedBorder3" label="复选框3" border="" size="medium"></el-checkbox>
        <el-checkbox-group v-model="checkedBorderInGroup" size="small">
          <el-checkbox label="复选框1" border="" disabled=""></el-checkbox>
          <el-checkbox label="复选框2" border=""></el-checkbox>
          <el-checkbox label="复选框3" border=""></el-checkbox>
        </el-checkbox-group>
        <el-checkbox-group v-model="checkedBorderInGroup" size="mini" disabled>
          <el-checkbox label="复选框1" border=""></el-checkbox>
          <el-checkbox label="复选框2" border=""></el-checkbox>
          <el-checkbox label="复选框3" border=""></el-checkbox>
        </el-checkbox-group>
    </div>
</template>
<script>
const cityOptions = ["北京", "上海", "青岛", "巴黎", "纽约", "伦敦"];
export default {
  data() {
    return {
      checked1: true,
      checked2: false,
      checked3: true,
      checked4: false,

      checkGroup: ["复选框1", "禁用复选框3"],

      checkAll: false,
      checkedCities: ["青岛", "伦敦"],
      cities: cityOptions,
      isIndeterminate: true,

      checkedMaxMin: ["青岛"],
      cities: cityOptions,

      checkedButton: ["上海", "青岛", "纽约"],

      checkedBorder1:true,
      checkedBorder2:false,
      checkedBorder3:true,
      checkedBorderInGroup:['复选框1','复选框2']
    };
  },

  methods: {
    handleCheckAllChange(value) {
      this.checkedCities = value ? cityOptions : [];
      this.isIndeterminate = false;
    },

    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
};
</script>
<style lang='scss' scoped>
.checkbox {
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