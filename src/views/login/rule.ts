/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-08 23:20:12
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-06-08 23:29:16
 * @FilePath: /vue3-demo/src/views/login/rule.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const validatePassword=()=>{
  return (rule:any,value:any,callback:any)=>{
    if(value.length>=6){
      callback(new Error("密码不能少于6位"))
    }else{
      callback()
    }
  }
}