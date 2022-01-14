<template>
    <div class="home-list">
        <van-card
            v-for="item in lessionList"
            :key="item.id"
            num="2"
            :price="item.price"
            desc="描述信息"
            :title="item.title"
            :thumb="item.poster"
        >
            <template #tags>
                <van-tag plain type="danger">{{
                    formateCategory(item.category)
                }}</van-tag>
                <van-tag plain type="danger">标签</van-tag>
            </template>
            <!-- <template #footer>
                <van-button size="mini">按钮</van-button>
                <van-button size="mini">按钮</van-button>
            </template> -->
        </van-card>
    </div>
</template>

<script lang="ts">
import store from "@/store";
import { ILessonList } from "@/typings/home";
import { computed, defineComponent, PropType, reactive } from "vue";
export default defineComponent({
    props: {
        lessionList: {
            type: Array as PropType<ILessonList[]>,
        },
    },
    setup(props) {
        console.log(props.lessionList);
        // const lessionList = reactive(store.state.home.lessons);
        // return {
        //     lessionList,
        // };
        function formateCategory(type: number) {
            switch (type) {
                case 1:
                    return "react";
                case 2:
                    return "vue";
                case 3:
                    return "node";
            }
        }
        return {
            formateCategory,
        };
    },
});
</script>
