<template>
    <div class="home-list">
        <div v-for='item in lessionList' :key="item.id">{{item.title}}11</div>
    </div>
</template>

<script lang="ts">
import store from "@/store";
import { ILessonList } from "@/typings/home";
import { computed, defineComponent, PropType, reactive } from "vue"; 
export default defineComponent({
    props:{
        // lessionList:Object as PropType<ILessonList[]>
    },
    setup(props){
        // console.log(props.lessionList)
        const lessionList = reactive(store.state.home.lessons);
        
        return{
            lessionList
        }
    }
});
</script>
