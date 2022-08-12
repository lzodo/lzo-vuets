<template>
    <h3>vue3 :deep、:slotted、:global</h3>
    <div class="v3-style">
        scoped 下 :deep() 伪类 设置子组件内的样式
    </div>
    <div class="slot-model">
        slot1
        <slot></slot>
        slot2
    </div>
    <div class="global-xxxx">
        :global() 将 scoped 里的某个设置在全局用 ,可以不用多开一个 style 标签对
    </div>
    <div class="style-modele">
        <div :class="$style.red">style-modele</div>
    </div>
    <div class="bindprops">
        动态设置css
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, useCssModule } from "vue";

export default defineComponent({
    setup() {
        // 默认, 返回 <style module> 中的类
        const defaultStyle = useCssModule();
        console.log(defaultStyle, 12);
        // 命名, 返回 <style module="classes"> 中的类
        const classesStyle = useCssModule("md2");
        console.log(classesStyle, 234);

        // 动态css ，style中通过bind获取这里的值，这里变化，样式就跟着变化
        let theme = reactive({ color: "#f0f" });
        setInterval(() => {
            theme.color == "#0f0"
                ? (theme.color = "#f0f")
                : (theme.color = "#0f0");
        }, 1000);
        
        return {
            theme,
        };
    },
});
</script>
<style scoped>
/* 组件内部设置slot过来的样式 */
:slotted(.slot-inner) {
    color: rgb(109, 236, 77);
}

:global(.global-xxxx) {
    background: #0ff;
}

.bindprops {
    color: v-bind("theme.color");
}
</style>
<style module>
.red {
    color: red;
}
</style>
<style module="md2">
.blur {
    color: rgb(0, 38, 255);
}
</style>
