<template>
    <div class="warp">
        {{ category }}
        <HomeHeader></HomeHeader>
        <HomeList></HomeList>
        <HomeSwiper></HomeSwiper>
    </div>
</template>

<script lang="ts">
import { IGlobalState } from "@/store";
import { computed, defineComponent } from "vue"; //vue自动不通过插件实现自动提示
import { useStore } from "vuex";
import HomeHeader from "./home-header.vue";
import HomeList from "./home-list.vue";
import HomeSwiper from "./home-swipe.vue";
export default defineComponent({
    data() {
        return {
            currents: "",
        };
    },

    components: {
        HomeHeader,
        HomeSwiper,
        HomeList,
    },
    setup() {
        let store = useStore<IGlobalState>();
        let category = computed(() => {
            return store.state.home.currentCategory;
        });

        return {
            category,
        };
    },
});
</script>
<style lang="scss" scoped>
.warp {
    background: #f2f2f2;
    height: 100%;
}
</style>
