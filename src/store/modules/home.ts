import { CATEGORY_TYPES, IHomeState } from "@/typings/home";
import { Module } from "vuex";
import { IGlobalState } from "..";
import * as Types from "@/store/action-types"; //拿到所有类型, 从../action-types中

const state: IHomeState = {
    //当前类型
    currentCategory: CATEGORY_TYPES.NODE,
    //轮播图
    sliders: [],
    //课程列表
    lessons: {
        hasMore: true, //是否还有更多数据
        loading: false, //默认没有正在加载
        offset: 0, //偏移默认无
        limit: 5,
        list: [
            //当前已经显示在页面上的记录
        ],
    },
};
//Module 第一个类型是自己的状态，第二个是全局状态
const home: Module<IHomeState, IGlobalState> = {
    namespaced: true,
    state,
    actions: {
        a(a) {},
    },
    mutations: {
        [Types.SET_CATEGORY](state, payload: CATEGORY_TYPES) {
            //home状态 ,新的payload数据要 CATEGORY_TYPES 中存在的
            state.currentCategory = payload;
            console.log(payload);
        },
    },
};

export default home;
