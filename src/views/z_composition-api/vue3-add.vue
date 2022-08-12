<template>
    <div>--------------vue3-add.vue start----------------</div>
    <div>{{version}}</div>
    <div>--------------vue3-add.vue end----------------</div>
</template>

<script lang="ts">
import { defineComponent,version  } from 'vue'

export default defineComponent({
    setup() {
        return {
            version
        }
    },
})
</script>
