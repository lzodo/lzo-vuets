<template>
    <div class="component-list">
        <div ref="root">root div2</div>
        {{ theme }}
    </div>
</template>

<script lang="ts">
import { CATEGORY_TYPES } from "@/typings/home";
import {
    computed,
    defineComponent,
    getCurrentInstance,
    inject,
    onMounted,
    PropType,
    reactive,
    readonly,
    ref,
    toRefs,
    unref,
    watch,
    watchEffect,
} from "vue"; //vue自动不通过插件实现自动提示

export default defineComponent({
    props: {
        msg1: Number,
        msg2: Number,
    },
    /**
     *
     *  setup 细节
     *     setup是在beforeCreate 生命周期之前执行的，只执行一次
     *     setup中无this
     *
     *     setup的返回值是一个对象，内部的属性方法是给HTML模板使用的
     *     setup的返回值的属性 后面回合并到data中 ,mounted中可验证
     *     setup的返回值的方法 后面回合并到methods中，重名setup优先（尽量不要混用）
     *     setup不能是async函数，它要的是return的对象，而不是promise
     *
     *     参数:
     *          props :父级传的参数，并且在props中接收的
     *          context ：
     *              attrs:包含父级的参数，没在props中接收的参数(相当于this.$attrs)
     *              slots:包含所有传入的插槽内容(相当于this.$slots)
     *              emit:用来出发自定义事假(相当于this.$emit)
     *
     *  ref 与 reactive 细节
     *      ref：
     *          一般用来处理基本类型数据
     *          如果ref处理对象，那么内部会自动将对象转换为reactive代理对象
     *          ref内部：通过给value属性添加getter/setter来实现对数据的劫持
     *      reactive：
     *          一般用来处理对象（递归深度响应式）
     *          reactive内部:通过Proxy实现数据劫持，并通过Reflect操作对象
     *
     *
     *
     */
    setup(props, context) {
        console.log(props);
        console.log(context);
        console.log(context.attrs);
        console.log(context);
        console.log("=================");
        const root = ref(null);

        onMounted(() => {
            // 在渲染完成后, 这个 div DOM 会被赋值给 root ref 对象
            console.log(root.value);
        });

        const theme = inject("data", "default");

        return {
            theme,
            root,
        };
    },
});
</script>
