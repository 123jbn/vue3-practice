/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-15 22:28:59
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-12 23:16:49
 * @FilePath: /vue3-demo/src/store/modules/user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { login } from "@/api/sys";
import md5 from "md5";
const user = {
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
      return new Promise((resolve, reject) => {
        login({ username, password: md5(password) })
          .then((data) => {
            console.log(data);
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
};
export default user;
