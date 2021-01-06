<template>
    <div class="component-list1">
        {{ title }}
        <div>支持:{{ addcount }}</div>
        <div>反对:{{ removecount }}</div>
        <div>支持比反对多:{{ ratio }}</div>
        <button @click="changecount(1)">支持</button>
        <button @click="changecount(0)">反对</button>
    </div>
</template>

<script lang="ts">
import { CATEGORY_TYPES } from "@/typings/home";
import {
    computed,
    defineComponent,
    PropType,
    reactive,
    readonly,
    ref,
    toRefs,
    watch,
    watchEffect,
} from "vue"; //vue自动不通过插件实现自动提示

export default defineComponent({
    props: {
        category: Number as PropType<CATEGORY_TYPES>, //PropType vue内置的不然组件里的category会推导成number
        title: String,
        name: String,
    },
    //emits: ["setCurrentCategory"], // 提示作用，提示可以触发父级的方法
    //初始化在porps和beforeCreate之间处理，只会加载时处理一次,数据变化不会触发
    setup(props, context) {
        // props：基于Proxy代理的响应数据
        console.log(props);

        //响应式数据变化才会更新视图let直接定义的是不会更新的
        //构建响应式数据方法ref()
        //reactive构建,基于proxy对数据进行深度监听

        let state = ref({
            removecount: 0,
            addcount: 0,
        });

        let state1 = reactive({
            removecount: 0,
            addcount: 0,
        });

        //监听
        //立即传入一个函数,并响应式追踪内部用到的属性，属性变化运行该函数
        watchEffect(() => {
            console.log(props.name);
            console.log(props.title);
        });
        //watch 和2.0一样 监听数据源，并在监听源变更时才会处理指定回调
        watch(
            () => state1.addcount, //监听reactive单个
            (x, oldx) => {
                console.log(x, oldx);
            }
        );

        function changecount(num: any) {
            num == 0 ? state.value.removecount++ : state.value.addcount++;
            num == 0 ? state1.removecount++ : state1.addcount++;
        }

        //将reactive每一项变为ref响应式数据
        toRefs(state1);

        //拿到state1响应数据，可读但是不能修改
        let stateOnly = readonly(state1);

        //计算属性,传入getter函数，返回默认不能手动修改的ref对象
        //!根据监听依赖的改变，自动计算出需要的值
        let ratio = computed(() => {
            let totle = state1.addcount - state1.removecount;
            return totle;
        });

        let ratio2 = computed({
            get: () => {},
            set: () => {},
        });

        // return里的变量和方法可以直接在模板中使用
        return {
            state,
            ...toRefs(state1), //toRefs转ref数据并结构后可直接使用
            ratio,
            changecount,
        };
    },
});
</script>
