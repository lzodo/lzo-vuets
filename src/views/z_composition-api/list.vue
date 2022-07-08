<template>
    <keep-alive>
        <componentList1 :title="title" :name="name"></componentList1>
    </keep-alive>
    <componentList2 :msg1="1" :msg2="2" :msg3="3"></componentList2>
    <router-view></router-view>
    {{ globalprop }}
    <LzoTest></LzoTest>
</template>
<script lang="ts">
import componentList1 from "./component-list1.vue";
import componentList2 from "./component-list2.vue";
import { defineComponent, provide, reactive } from "vue";
import LzoTest from "../../components/LzoTest.vue";

export default defineComponent({
    components: {
        componentList1,
        componentList2,
        LzoTest
    },
    data() {
        return {
            title: "字符串标题",
            name: "names",
        };
    },

    methods: {
        reactiveSource() {
            let obj = {
                name: "name",
                lan: "a",
                child: {
                    name: "childName",
                },
                // [ke:string]: any;
            };
            let proxyObj = new Proxy(obj, {
                get(target, prop) {
                    console.log("get方法被访问了");
                    return Reflect.get(target, prop);
                },
                set(target, prop, val) {
                    console.log("set方法被访问了");
                    return Reflect.set(target, prop, val);
                },
                deleteProperty(target, prop) {
                    console.log("一个属性被删除");
                    return Reflect.deleteProperty(target, prop);
                },
            });
            // 通过代理对象获取目标对象的属性
            console.log(proxyObj.name);
            // 通过代理对象修改目标对象的属性
            console.log((proxyObj.name = "newname"));
            // 通过代理对象添加目标对象的属性
            // proxyObj.child.age = 10;

            // delete proxyObj.lan;s
        },
    },

    mounted() {
        setTimeout(() => {
            this.title = "字符串标题更新";
        }, 2000);
        console.log(this);

        this.reactiveSource();
    },
    provide: {
        forre: "provide",
    },
    setup() {
        //!数据传递方式二:依赖注入子组件通过inject获取数据
        provide(
            "data",
            reactive({
                a: 10,
                b: 20,
            })
        );
    },
});
</script>
<style lang="scss" scoped></style>
