//mock/index.js
import Mock from "mockjs";
console.log(Mock);
/*
    Mock.mock(url?,type?,template|function(option))
    参数一:可选，表示要拦截的URL地址(发送一个请求,如果请求地址Mock过了,直接拦截不回去服务器请求了)
    参数二:可选，请求类型
    参数三:回调
*/

//Mock构造数据
var Random = Mock.Random; //占位符生成随机数

Random.extend({
    selfrandom: function(data) {
        let selfrandoms = ["str1", "str3"];
        return this.pick(selfrandoms);
    },
});

Mock.mock("http://localhost:3003/home/slide/list", "get", {
    status: 0,
    message: "获取成功",
    "data|5-10": [
        {
            url: Random.dataImage("300x100", Random.csentence(2, 8)),
        },
    ],
});

const dataList: any = []; // 用于接受生成数据的数组

for (let i = 0; i < 26; i++) {
    // 可自定义生成的个数

    const template = {
        id: i,
        title: Random.csentence(2, 8),
        video: Random.url(),
        poster: Random.dataImage("100x100", Random.csentence(2, 4)),
        price: Random.natural(1, 10),
        category: Random.integer(1, 3),
        // Boolean: Random.boolean, // 可以生成基本数据类型
        // Natural: Random.natural(1, 10), // 生成1到100之间自然数
        // Integer: Random.integer(1, 100), // 生成1到100之间的整数
        // Float: Random.float(0, 100, 0, 5), // 生成0到100之间的浮点数,小数点后尾数为0到5位
        // Character: Random.character(), // 生成随机字符串,可加参数定义规则
        // String: Random.string(2, 10), // 生成2到10个字符之间的字符串
        // Range: Random.range(0, 10, 2), // 生成一个随机数组
        // Date: Random.date(), // 生成一个随机日期,可加参数定义日期格式
        // Image: Random.dataImage("100x100", Random.csentence(2, 8)), // Random.size表示将从size数据中任选一个数据
        // Color: Random.color(), // 生成一个颜色随机值
        // Paragraph: Random.paragraph(2, 5), // 生成2至5个句子的文本
        // Name: Random.name(), // 生成姓名
        // Url: Random.url(), // 生成web地址
        // Address: Random.province(), // 生成地址
    };

    dataList.push(template);
}

// list 分页接口()

Mock.mock("http://localhost:3003/home/lesson/list", "post", (params: any) => {
    let info = JSON.parse(params.body);
    let [offset, limit, total] = [info.offset, info.limit, dataList.length];
    let newDataList = dataList.slice(offset, offset + limit);
    let hasMore = true;
    if (offset + limit >= total) {
        hasMore = false;
    }

    return {
        status: 0,
        message: "success",
        data: {
            offset: offset,
            pageSize: limit,
            list: newDataList,
            total: total,
            hasMore: hasMore,
            totalPages: newDataList.length,
        },
    };
});

Mock.mock("/api/mockpost", "post", function(option: any) {
    console.log(option);
    return Mock.mock({
        status: 200,
        message: "提交成功",
    });
});
