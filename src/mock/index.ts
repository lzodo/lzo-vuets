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
//@符号只能在Mock.mock中使用
//Random的自定义随机数
Random.extend({
    selfrandom: function(data) {
        let selfrandoms = ["str1", "str3"];
        return this.pick(selfrandoms);
    },
});

Mock.mock("http://localhost:8080/slide/list", "get", {
    status: 200,
    message: "获取成功",
    "data|5-10": [
        {
            url: Random.dataImage("300x100", Random.csentence(2, 8)),
            // //生成5到10条
            // "id0|+1": 0, //id自增
            // step1: Random.increment(2), //生成值步长2
            // step2: "@increment(2)",
            // text2: Random.csentence(2, 8), //生成2到8个文字
            // text1: "@csentence(2,8)",
            // img1: Random.dataImage("50x50", "text 图片文字"), //生成图片
            // img2: '@dataImage("50x50")',
            // self: "@selfrandom",
        },
    ],
});

Mock.mock("/api/mockpost", "post", function(option: any) {
    console.log(option);
    return Mock.mock({
        status: 200,
        message: "提交成功",
    });
});
