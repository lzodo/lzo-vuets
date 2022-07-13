import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Vant from "vant";
import "vant/lib/index.css";

import "./mock";

import directive from "./directive/index"
import mixins from "./mixins/index"

const app = createApp(App);

app.use(directive);
app.use(mixins);

// 应用配置
console.log(app.config);

app.config.globalProperties.globalprop = 'barxxxxxxx'; // 定义全局属性
app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('Lzo');



app.use(Vant)
    .use(store)
    .use(router)
    .mount("#app"); // #app 元素的 innerHTML 将被替换为应用根组件的模板渲染结果


// 实例 property 顶级操作数据
// console.log(vm)
// console.log(vm.$data)
