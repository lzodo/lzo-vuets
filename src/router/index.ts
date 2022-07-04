import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// createWebHashHistory hash路由
import Home from "../views/home/index.vue";

/**
 * 懒加载的方式
 */
//法一
let Path3 = () => import("../views/mine/index.vue");
//法二
let Path2 = (resolve: (...modules: any[]) => void) =>
    require(["../views/mine/index.vue"], resolve);
//法三
//xxx

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            title: "首页",
        },
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
            import(/* webpackChunkName: "profile" */ "../views/profile/index.vue"),
    },
    {
        path: "/compositionapi",
        name: "compositionapi",
        component: () =>
            import(
        /* webpackChunkName: "compositionapi" */ "../views/z_composition-api/list.vue"
            ),
        meta: {
            title: "vue3方式",
        },
        children:[
            {
                path:"",
                name:"vue3Add",
                component:()=> import("../views/z_composition-api/vue3-add.vue")
            }
        ]
    },
    {
        path: "/optionapi",
        name: "optionapi",
        component: () =>
            import(
        /* webpackChunkName: "compositionapi" */ "../views/z_options_api/list.vue"
            ),
        meta: {
            title: "vue2方式",
        },
    },

    //扩展
    {
        path: "/path1",
        redirect: "/mine", //重定向到指定路径
    },
    {
        //动态路由，跳转的时候/user/后面随机添加的id不会影响路径
        //新页面中{{$route.params.userId}} 获取
        //这个$route计算页面中处于活跃的路由信息，就是这边每一个大括号，用于页面中获取数据
        //query方式不需要动态路由，在路径后面加，query:{userId:xxx}, 通过{{$route.query.userId}}获取
        path: "/user/:userId",
        component: Home,
        meta: { //元数据
            title: "用户",
        },
        beforeEnter:(to,from,next)=>{
            //局部守卫，其他路由不会触发
            next();
        }
    },
    {
        //嵌套
        path: "/userparent",
        component: Home,
        children: [
            {
                path: "/", //默认
                redirect: "news",
            },
            {
                path: "news", // 访问/userparent/news时，显示在Home中的<router-view>中
                component: Home,
            },
        ],
    },
];
console.log(process.env);

//$router 与 $route的差别
//router 就是将来 this.$router.push()的$router，【整个路由对象】
//这个$route计算页面中处于活跃的路由信息，就是这边每一个大括号，用于页面中获取数据【当前激活的单个路由】
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

//全局导航守卫，前置钩子(hook)，监听导航跳转，并在跳转间做必要的事情
router.beforeEach((to,from,next) => { 
    if(to.meta.title){
        document.title = to.meta.title
    }else{
        document.title = 'vue 项目'
    }
    next()//可以指定跳转地址
});

//全局导航守卫，后置钩子(hook)，监听导航跳转后要做的事情，不需要next()
router.afterEach((to,from) => { 
    console.log(to)
});
export default router;
