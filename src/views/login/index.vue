<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-07 21:38:29
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-06-07 23:06:39
 * @FilePath: /vue3-demo/src/views/login/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="login-container">
    <div class="login-container-form">
      <h3>用户登陆</h3>
      <el-form label-width="80px">
        <el-form-item label="用户名">
          <el-input placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input placeholder="请输入密码" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {},
});
</script>
<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  background-image: url(https://img2.baidu.com/it/u=569689397,1626988174&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=375);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  &-form {
    width: 400px;
    height: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
