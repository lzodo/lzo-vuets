const express = require('express');
const router = express.Router();

router.get('/slide/list',(req,res)=>{
    res.send({ status: 0, message: "slide 获取成功", data: [
        {
            url:'https://gitee.com/liaozhongxun/lzo-static/blob/master/image/banner1.jpg'
        },
    ] });
})


module.exports = router;