<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-14 23:36:19
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-17 23:34:38
 * @FilePath: /vue3-demo/src/layout/components/sideBar/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <side-bar-menu></side-bar-menu>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import sideBarMenu from "./menu";
export default defineComponent({
  components: {
    sideBarMenu,
  },
  setup() {
    return {};
  },
});
</script>

<style></style>
