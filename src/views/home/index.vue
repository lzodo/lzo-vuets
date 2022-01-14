<template>
    <div class="warp">
        <HomeHeader
            :category="category"
            @setCurrentCategory="setCurrentCategory"
        ></HomeHeader>
        <div class="scroll-main" ref="refreshEle">
            <Suspense>
                <template #default>
                    <HomeSwiper></HomeSwiper>
                </template>
                <template #fallback>
                    <div>loading...</div>
                </template>
            </Suspense>
            <HomeList :lessionList="lessionList"></HomeList>
        </div>
        <!-- <button @click="getScrolllist">scroll</button> -->
    </div>
</template>

<script lang="ts">
import { IGlobalState } from "@/store";
import { CATEGORY_TYPES } from "@/typings/home";
import { computed, defineComponent, onMounted, ref } from "vue"; //vue自动不通过插件实现自动提示
import { Store, useStore } from "vuex";
import HomeHeader from "./home-header.vue";
import HomeList from "./home-list.vue";
import HomeSwiper from "./home-swipe.vue";
import * as Types from "@/store/action-types";
import { useLoadMore } from "@/hooks/useLoadMore";

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
    const lessionList = computed(() => store.state.home.lessons.list);

    onMounted(() => {
        if (lessionList.value.length == 0) {
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

        console.log(lessionList.value);

        function getScrolllist() {
            store.dispatch(`home/${Types.SET_LESSON_LIST}`);
        }
        //获取dom
        const refreshEle = ref<null | HTMLElement>(null); //标识一下现在是null 等会可能会变成html
        const { isLoading, hasMore } = useLoadMore(
            refreshEle,
            store,
            `home/${Types.SET_LESSON_LIST}`
        );

        return {
            category,
            setCurrentCategory,
            lessionList,
            getScrolllist,
            refreshEle,
        };
    },
});
</script>
<style lang="scss" scoped>
.warp {
    background: #f2f2f2;
    height: 100%;
    display: flex;
    flex-direction: column;
    .scroll-main {
        flex: 1;
        overflow: auto;
    }
}
</style>
