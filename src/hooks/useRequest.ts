//引入axios
import { ref } from "vue";
import axios from "axios";

export function useRequest(url: string) {
    const loading = ref(true);
    const data = ref(null);
    const errorMsg = ref("");
    axios
        .get(url)
        .then((res) => {
            loading.value = false;
            data.value = res.data;
        })
        .catch((err) => {
            loading.value = false;
            errorMsg.value = err.msg || "未知错误";
        });

    return {
        loading,
        data,
        errorMsg,
    };
}


// https://segmentfault.com/a/1190000018928587
// https://juejin.cn/post/7066951709678895141
// Hooks可以在不改变组件层级关系的前提下，方便的重用带状态的逻辑