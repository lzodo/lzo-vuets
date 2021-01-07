<template>
    <div class="warp">
        <HomeHeader
            :category="category"
            @setCurrentCategory="setCurrentCategory"
        ></HomeHeader>
        <Suspense>
            <template #default>
                <HomeSwiper></HomeSwiper>
            </template>
            <template #fallback>
                <div>loading...</div>
            </template>
        </Suspense>
        <HomeList></HomeList>
    </div>
</template>

<script lang="ts">
import { IGlobalState } from "@/store";
import { CATEGORY_TYPES } from "@/typings/home";
import { computed, defineComponent, onMounted } from "vue"; //vue自动不通过插件实现自动提示
import { Store, useStore } from "vuex";
import HomeHeader from "./home-header.vue";
import HomeList from "./home-list.vue";
import HomeSwiper from "./home-swipe.vue";
import * as Types from "@/store/action-types";

function useCategory(store: Store<IGlobalState>) {
    //使用计算属性可以在数据变化后计算出新值
    let category = computed(() => {
        return store.state.home.currentCategory;
    });

    function setCurrentCategory(category: CATEGORY_TYPES) {
        store.commit(`home/${Types.SET_CATEGORY}`, category); //commit 触发 mutations
    }

    return {
        category,
        setCurrentCategory,
    };
}

function useLissionList(store: Store<IGlobalState>) {
    const lessionList = computed(() => store.state.home.lessons);

    onMounted(() => {
        if (lessionList.value.list.length > 0) {
            store.dispatch(`home/${Types.SET_LESSON_LIST}`);
        }
    });

    return {
        lessionList,
    };
}
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
        //得到当前最新分类和修改分类的方法
        let { category, setCurrentCategory } = useCategory(store);
        //获取列表
        let { lessionList } = useLissionList(store);

        return {
            category,
            setCurrentCategory,
            lessionList,
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
