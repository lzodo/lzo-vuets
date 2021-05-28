import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// createWebHashHistory hash路由
import Home from "../views/home/index.vue";

/**
 * 懒加载的方式
 */
//法一
let Path3 = () => import("../views/mine/index.vue")
//法二
let Path2 = (resolve: (...modules: any[]) => void) => require(["../views/mine/index.vue"],resolve)
//法三
//xxx

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
        name: "profile",
        component: () =>
            import(
                /* webpackChunkName: "profile" */ "../views/profile/index.vue"
            ),
    },
    {
        path: "/compositionapi",
        name: "compositionapi",
        component: () =>
            import(/* webpackChunkName: "compositionapi" */ "../views/z_composition-api/list.vue"),
    },
    {
        path: "/optionapi",
        name: "optionapi",
        component: () =>
            import(/* webpackChunkName: "compositionapi" */ "../views/z_options_api/list.vue"),
    },

    //扩展
    {
        path:"/path1",
        redirect:"/mine",//重定向到指定路径
    },
    {
        //动态路由，跳转的时候/user/后面随机添加的id不会影响路径
        //新页面中{{$route.params.userId}} 获取   
        //这个$route计算页面中处于活跃的路由信息，就是这边每一个大括号，用于页面中获取数据
        path:"/user/:userId",
        component:Home,
    }
];
console.log(process.env) 
const router = createRouter({ //router 就是将来 this.$router.push()的$router
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
