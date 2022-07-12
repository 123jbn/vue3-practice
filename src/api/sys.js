/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-15 22:25:13
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-06-15 22:39:40
 * @FilePath: /vue3-demo/src/api/sys.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from "@/utils/request";
/**
 * 登陆
 */
export const login = (data) => {
  return request({
    url: "sys/login",
    // method: POST,
    data,
  });
};
