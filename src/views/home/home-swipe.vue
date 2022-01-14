<template>
    <div class="home-swiper">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in sliderList" :key="item.url">
                <img :src="item.url" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script lang="ts">
import { IGlobalState } from "@/store";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import * as Types from "@/store/action-types";
export default defineComponent({
    //默认不能加async属性的，可以用内置组件Suspense解决
    async setup() {
        //首先获取数据
        let store = useStore<IGlobalState>();

        let sliderList = computed(() => store.state.home.sliders);
        if (sliderList.value.length == 0) {
            //如果没有数据则去获取数据
            await store.dispatch(`home/${Types.SET_SLIDER_LIST}`); //dispatch 触发 action
        }
        console.log("=============================");
        console.log(sliderList.value);
        console.log("==============.===============");

        return {
            sliderList,
        };
    },
});
</script>
<style lang="scss" scoped>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    width: 100%;
    height: 150px;
    img {
        width: 100%;
        height: 100%;
    }
}
</style>
