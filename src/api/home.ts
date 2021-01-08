import { CATEGORY_TYPES } from "@/typings/home";
import axios from ".";

//获取轮播图接口
export function getSliders<T>() {
    return axios.get<T, T>("/slide/list");
}

//获取列表
// export function getLessons<T>(
//     category: CATEGORY_TYPES,
//     offset: number = 0,
//     limit: number = 5
// ) {
//     return axios.get<T, T>(
//         `/lesson/list?category=${category}&offset=${offset}&limit=${limit}`
//     );
// }
export function getLessons<T>(
    category: CATEGORY_TYPES,
    offset: number = 0,
    limit: number = 5
) {
    console.log('to getLessons')
    return axios.post<T, T>(
        `/lesson/list`,{category:category,offset:offset,limit:limit}
    );
}
