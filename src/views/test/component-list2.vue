<template>
    <div class="component-list">
        <div ref="root">root div2</div>
        {{ theme }}
    </div>
</template>

<script lang="ts">
import { CATEGORY_TYPES } from "@/typings/home";
import { computed, defineComponent, getCurrentInstance, inject, onMounted, PropType, reactive, readonly, ref, toRefs, unref, watch, watchEffect } from "vue"; //vue自动不通过插件实现自动提示
const ThemeSymbol = Symbol();
export default defineComponent({
    props: {
        category: Number as PropType<CATEGORY_TYPES>, //PropType vue内置的不然组件里的category会推导成number
        title: String,
        name: String,
    },
    inject: ["forr"], //2.0用法
    mounted(){

    },
    setup(props, context) {
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
