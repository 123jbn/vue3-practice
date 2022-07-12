/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-12 22:41:29
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-12 22:49:42
 * @FilePath: /vue3-demo/src/utils/storage.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * 存储数据
 */
export const setItem = (key, value) => {
  // 复杂数据类型
  // 简单数据类型
  if (typeof value === "object") {
    value = JSON.stringify(value);
  }
  window.localStorage.setItem(key, value);
};
/**
 * 获取数据
 */
export const getItem = (key) => {
  const data = window.localStorage.getItem(key);
  try {
    return JSON.stringify(data);
  } catch (err) {
    return data;
  }
};
/**
 * 删除指定数据
 */
export const removeItem = (key) => {
  window.localStorage.removeItem(key);
};
/**
 * 删除全部数据
 */
export const removeAll = () => {
  window.localStorage.clear();
};
