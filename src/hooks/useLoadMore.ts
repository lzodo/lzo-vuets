import { IGlobalState } from "@/store";
import { computed, onMounted, Ref } from "vue";
import { Store } from "vuex";
// import _ from "loadsh"

export function useLoadMore(
    refreshEle: Ref<null | HTMLElement>,
    store: Store<IGlobalState>,
    type: string
) {
    let element: HTMLElement;

    function _loadMore() {
        //获取可视区高度 滚动高度 整个高度
        let clientHeight = element.clientHeight;
        let scrollTop = element.scrollTop;
        let scrollHeight = element.scrollHeight;
        //如果可视区高度 + 滚动高度 + 距离底部高度 > 整个高度
        if (clientHeight + scrollTop + 50 > scrollHeight) {
            store.dispatch(type);
        }
    }
    //页面加载好了

    onMounted(() => {
        element = refreshEle.value as HTMLElement; //加载好后一定是有DOM元素了
        element.addEventListener("scroll", _loadMore);
    });

    let isLoading = computed(() => {
        return store.state.home.lessons.loading;
    });
    let hasMore = computed(() => {
        return store.state.home.lessons.hasMore;
    });
    return {
        isLoading,
        hasMore,
    };
}
