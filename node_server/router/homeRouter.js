const express = require("express");
const router = express.Router();

router.get("/slide/list", (req, res) => {
    res.send({
        status: 0,
        message: "slide 获取成功",
        data: [
            {
                url: `${global.Rbp}/image/banner1.jpg`,
            },
            {
                url: `${global.Rbp}/image/banner2.jpg`,
            },
            {
                url: `${global.Rbp}/image/banner3.jpg`,
            },
        ],
    });
});

const dataList = []; // 用于接受生成数据的数组
let dataListImg = [`/image/1.jpg`, `/image/2.jpg`, `/image/3.jpg`];

for (let i = 0; i < 50; i++) {
    // 可自定义生成的个数
    const template = {
        id: i,
        title: `第${i + 1}条记录`,
        video: `video ${i + 1}`,
        poster: global.Rbp + dataListImg[Math.floor(Math.random() * 3)],
        price: (Math.random() * 100).toFixed(2),
        category: Math.floor(Math.random() * 3) + 1,
    };
    dataList.push(template);
}

router.post("/lesson/list", (req, res) => {
    let { category, offset, limit } = req.body;
    let total = dataList.length;
    let newDataList = dataList.slice(offset, offset + limit);
    let hasMore = true;
    if (offset + limit >= total) {
        hasMore = false;
    }
    res.send({
        status: 0,
        message: "slide 获取成功",
        data: {
            offset: offset,
            pageSize: limit,
            list: newDataList,
            total: total,
            hasMore: hasMore,
            totalPages: newDataList.length,
        },
    });
});

module.exports = router;
