<template>
    <div class="lzo-test"></div>
</template>

<script lang="ts">
import { h, defineComponent, useCssModule } from "vue";

export default defineComponent({
    emits: ["check"],
    created() {
        this.$emit("check");
    },
    setup() {
        const style = useCssModule();
        console.log(style.success);
        console.log(style.bb);
        console.log(style.aa);
        return () =>
            h(
                "div",
                {
                    class: style.success,
                },
                "Task complete!"
            );
    },
});
</script>

<style module>
.success {
    color: #090;
}
.aa {
    color: #f00;
}
.bb {
    color: #0ff;
}
</style>
