<template>
    <div class="component-list">
        {{ title }}
        <div ref="root">root div2</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import emitter from "@/bus";
export default defineComponent({
    props: {
        title: String,
        name: String,
    },
    inject: ["provide_data"], //2.0用法
    //!生命周期
    beforeCreate() {
        console.log("创建前");
    },
    created() {
        console.log("创建成功");
    },
    beforeMount() {
        console.log("挂载dom前");
    },
    mounted() {
        console.log("挂载dom成功");
        console.log(this.name);
        // console.log(this.provide_data);
        setTimeout(() => {
            emitter.emit("EVENTTYPE", "mitt触发成功ss");
        }, 2000);
    },
    beforeUpdate() {
        console.log("更新前");
    },
    updated() {
        console.log("更新成功");
    },
    beforeDestroy() {
        console.log("销毁前");
    },
    destroyed() {
        console.log("销毁成功");
    },
    errorCaptured() {
        console.log("错误成功");
    },
    activated() {
        console.log("激活成功");
    },
    deactivated() {
        console.log("切换，转未激活成功");
    },
});
</script>
