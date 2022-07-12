import InputFocus from "./instructions/from/input"
const install = function (app: any) {
  // 注册
  // app.directive('directive', {
  //   mounted(el:any) {
  //     el.value = "自定义指令"
  //     el.focus()
  //   }
  // })
  app.directive('focus', InputFocus) // 使用时 v-focus
}

export default install




/**
 * 自定义指令 全局注册
 * 
 */
