<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-07 21:38:29
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-07 22:47:28
 * @FilePath: /vue3-demo/src/views/login/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="login-container">
    <div class="login-container-form">
      <h3>用户登陆</h3>
      <el-form
        label-width="80px"
        v-model="loginForm"
        :rules="rules"
        ref="loginForms"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="loginForm.userName" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            placeholder="请输入密码"
            v-model="loginForm.password"
            type="password"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            style="width: 100%"
            @click="login"
            :loading="loading"
            >登陆</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { validatePassword } from "./rule";
export default defineComponent({
  name: "HomeView",
  components: {},
  setup() {
    // 表单数据
    const loginForm = ref({
      userName: "",
      password: "",
    });
    const rules = ref({
      userName: [
        {
          required: true,
          message: "用户名为必填项",
          trigger: "blur",
        },
      ],
      password: [
        {
          required: true,
          trigger: "blur",
          validator: validatePassword(),
        },
      ],
    });
    // 按钮是否加载中
    const loading = ref(false);
    const loginForms = ref(null);
    const login = () => {
      // loading.value = true;
      // console.log(loginForm.value, "ddddddd");
      // loginForm.value.validate((valid) => {
      //   console.log(valid);
      //   // if !validate return
      // });
    };
    return {
      loginForm,
      rules,
      loading,
    };
  },
});
</script>
<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  // background-image: url(https://img2.baidu.com/it/u=569689397,1626988174&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=375);
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
