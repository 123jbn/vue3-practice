<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-17 23:33:06
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-17 23:40:20
 * @FilePath: /vue3-demo/src/layout/components/sideBar/menu.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-menu background-color="#99A9BF" text-color="#fff">
    <el-sub-menu index="1">
      <template #title>
        <span>导航1</span>
      </template>
      <el-menu-item index="1-1">课程1</el-menu-item>
      <el-menu-item index="1-2">课程2</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <span>导航2</span>
      </template>
      <el-menu-item index="2-1">课程1</el-menu-item>
      <el-menu-item index="2-2">课程2</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3">导航3</el-menu-item>
    <el-menu-item index="4">导航4</el-menu-item>
  </el-menu>
</template>

<script>
import { defineComponent } from "vue";
// eslint-disable-next-line vue/no-export-in-script-setup
export default defineComponent({
  components: {},
  setup() {
    return {};
  },
});
</script>

<style></style>
