<template>
    <componentList1 :title="title" :name="name"></componentList1>
</template>
<script lang="ts">
import componentList1 from "./component-list1.vue";
import Vue, { defineComponent } from "vue";
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
    mounted() {
        setTimeout(() => {
            this.title = "字符串标题更新";
        }, 2000);
    },
});
</script>
<style lang="scss" scoped></style>
