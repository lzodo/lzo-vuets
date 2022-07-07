import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Vant from "vant";
import "vant/lib/index.css";

import "./mock";

const app = createApp(App);

// 应用配置
app.config.globalProperties.globalprop = 'barxxxxxxx'; // 定义全局属性
// app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('ion-')

app.use(Vant)
    .use(store)
    .use(router)
    .mount("#app");


