/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-07 21:23:39
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-12 23:48:53
 * @FilePath: /vue3-demo/vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  //webpack devserver提供了代理的功能，该代理可以把所有请求到当前服务中的请求，转发（代理）到另外一个服务器上
  devServer: {
    proxy: {
      "/api": {
        target: "https://api.imooc-admin.lgdsunday.club",
        changeOrigin: true,
      },
    },
  },
  transpileDependencies: true,
});
