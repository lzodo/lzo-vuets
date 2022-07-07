import { CATEGORY_TYPES, IHomeState, ILessons, ISliders } from "@/typings/home";
import { Module } from "vuex";
import { IGlobalState } from "..";
import * as Types from "@/store/action-types"; //拿到所有类型, 从../action-types中
import { getLessons, getSliders } from "@/api/home";

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
        async [Types.SET_SLIDER_LIST]({ commit }) {
            let sliders = await getSliders<ISliders>();
            commit(Types.SET_SLIDER_LIST, sliders);
        },
        async [Types.SET_LESSON_LIST]({ commit }) {
            console.log(state)
            if (state.lessons.loading) {
                //如果正在加载 直接结束
                return;
            }
            if (!state.lessons.hasMore) {
                //如果没与更多了
                return;
            }
            commit(Types.SET_LOADING, true); //开始加载数据
            //获取课程
            let lessins = await getLessons<ILessons>(
                state.currentCategory,
                state.lessons.offset,
                state.lessons.limit
            );
            commit(Types.SET_LESSON_LIST, lessins);
            commit(Types.SET_LOADING, false); //加载完成
        },
    },
    //@ mutation 必须是同步的
    //@ 只有mutation才能正真改变VUEX stroe中的state
    //@ Action可以异步提交 Action 提交的是 mutation，而不是直接变更状态。
    mutations: {
        [Types.SET_CATEGORY](state, payload: CATEGORY_TYPES) {
            //home状态 ,新的payload数据要 CATEGORY_TYPES 中存在的
            state.currentCategory = payload;
            console.log(payload);
        },
        [Types.SET_SLIDER_LIST](state, payload: ISliders[]) {
            state.sliders = payload;
            console.log(state.sliders);
        },
        [Types.SET_LOADING](state, payload: Boolean) {
            state.lessons.loading = !!payload;
        },
        [Types.SET_LESSON_LIST](state, payload: ILessons) {
            console.log(payload)
            // state.lessons.list = [...state.lessons.list, ...payload.list];
            state.lessons.list = state.lessons.list.concat(payload.list);
            state.lessons.hasMore = payload.hasMore;
            state.lessons.offset = state.lessons.offset + payload.list.length;
            console.log(state.lessons,state.lessons.hasMore,state.lessons.offset)
        },
    },
};

export default home;
