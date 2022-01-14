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
