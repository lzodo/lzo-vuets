<template>
    <keep-alive>
        <componentList1 :title="title" :name="name"></componentList1>
    </keep-alive>
</template>
<script lang="ts">
import componentList1 from "./component-list1.vue";
import Vue, { defineComponent, reactive } from "vue";
import { mapMutations, MutationMethod } from "vuex";
import * as Types from "@/store/action-types";
import store, { IGlobalState } from "@/store";
import emitter from '@/bus' //!三、使用mitt中央事件总线实现信息传递，2.0 自带的bus.$on、bus.$emit，3中废弃

export default defineComponent({
    components: {
        componentList1,
    },
    data() {
        return {
            title: "字符串标题",
            name: "names",
        };
    },
    //! 依赖注入
    provide: {
        provide_data: {
            a: "2.0 provide 依赖注入",
            b: "2.0 inject 依赖注入",
        },
    },
    methods: {
        // ...mapMutations([
        //     `increment`, // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
        //     `home/${Types.SET_CATEGORY}`,
        // ]),
    },
    mounted() {
        emitter.on("EVENTTYPE", (data: any) => {
            console.log(data);
        });

        console.log('===========================')

        setTimeout(() => {
            this.title = "字符串标题更新";
        }, 2000);
        // store.commit(`home/${Types.SET_CATEGORY}`,store.state.home.currentCategory)
        store.commit("increment", 5);

        //!数据传递四: $attrs与$listeners
    },
});
</script>
<style lang="scss" scoped></style>
