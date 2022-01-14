<template>
    <div class="component-hook">
        <div ref="root">hook components</div>
        {{ theme }}
    </div>
</template>

<script lang="ts">
import { useRequest } from "@/hooks/useRequest";
import { defineComponent } from "vue";

export default defineComponent({
    props: {},

    setup(props, context) {
        let { loading, data, errorMsg } = useRequest("url");
        return {};
    },
});
</script>
