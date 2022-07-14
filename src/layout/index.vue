<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-14 23:36:19
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-14 23:43:23
 * @FilePath: /vue3-demo/src/layout/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <navBar></navBar>
    <appMain></appMain>
    <sideBar></sideBar>
  </div>
</template>

<script setup>
import { defineComponent } from "vue";
import appMain from "./components/appMain";
import sideBar from "./components/sideBar";
import navBar from "./components/navBar";
// eslint-disable-next-line vue/no-export-in-script-setup
export default defineComponent({
  components: { appMain, sideBar, navBar },
  setup() {
    return {};
  },
});
</script>

<style></style>
