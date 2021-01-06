<template>
    <div class="home-header">
        <van-dropdown-menu>
            <van-dropdown-item
                :modelValue="category"
                :options="options"
                @change="change"
            />
        </van-dropdown-menu>
    </div>
</template>

<script lang="ts">
import { CATEGORY_TYPES } from "@/typings/home";
import { defineComponent, PropType, reactive, toRefs } from "vue"; //vue自动不通过插件实现自动提示

export default defineComponent({
    props: {
        category: Number as PropType<CATEGORY_TYPES>, //PropType vue内置的不然组件里的category会推导成number
    },
    emits: ["setCurrentCategory"], // 提示作用，提示可以触发父级的方法
    setup(props, context) {
        // context.emit("setCurrentCategory")
        // reactive vue3的响应数据
        let state = reactive({
            options: [
                { text: "全部课程", value: CATEGORY_TYPES.ALL },
                { text: "react", value: CATEGORY_TYPES.REACT },
                { text: "vue", value: CATEGORY_TYPES.VUE },
                { text: "nodejs", value: CATEGORY_TYPES.NODE },
            ],
        });

        function change(type: CATEGORY_TYPES) {
            context.emit("setCurrentCategory", type);
        }
        return {
            ...toRefs(state), //结构状态
            change,
        };
    },
});
</script>
