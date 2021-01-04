import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/home/index.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/mine",
        name: "mine",
        // 路由级代码拆分
        // 这会为此路由生成一个单独的块 (mine.[hash].js)
        // 在访问路线时被延迟加载
        component: () =>
            import(/* webpackChunkName: "mine" */ "../views/mine/index.vue"),
    },
    {
        path: "/profile",
        name: "Profile",
        component: () =>
            import(
                /* webpackChunkName: "profile" */ "../views/profile/index.vue"
            ),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
