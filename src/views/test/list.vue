<template>
    <keep-alive>
        <componentList1 :title="title" :name="name"></componentList1>
    </keep-alive>
    <componentList2></componentList2>
</template>
<script lang="ts">
import componentList1 from "./component-list1.vue";
import componentList2 from "./component-list2.vue";
import Vue, { defineComponent, provide, reactive } from "vue";

const ThemeSymbol = Symbol();
export default defineComponent({
    components: {
        componentList1,
        componentList2,
    },
    data() {
        return {
            title: "字符串标题",
            name: "names",
        };
    },

    mounted() {
        setTimeout(() => {
            this.title = "字符串标题更新";
        }, 2000);
    },
    provide:{
        forre:'dfafdafdasd'
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
