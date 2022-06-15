/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-15 22:28:59
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-06-15 22:34:09
 * @FilePath: /vue3-demo/src/store/modules/user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { login } from "@/api/sys";
import { resolve } from "core-js/fn/promise";
import md5 from "md5";
export default {
  namespaced: true, //表示该模块为单独的模块
  state: () => ({}),
  mutations: {},
  actions: {
    /**
     * 登陆请求动作
     * @param {*} context
     * @param {*} userInfo
     * @returns
     */
    login(context, userInfo) {
      const { username, password } = userInfo;
      return new Promise((resove, reject) => {
        login({ username, password })
          .then((data) => {
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
};
