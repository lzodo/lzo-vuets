import { IHomeState } from "@/typings/home";
import { createStore } from "vuex";
import home from "./modules/home";

export interface IGlobalState {
    home: IHomeState;
}

let store = createStore<IGlobalState>({
    // state: {
    // },
    mutations: {
        increment(state,payload){
            console.log('payload:'+payload)
        }
    },
    actions: {},
    modules: {
        home,
    },
});

export default store;
