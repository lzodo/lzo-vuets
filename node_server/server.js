const { static } = require("express");
const express = require("express");
const path = require("path");
const app = express();
var  cors = require( 'cors' ); 
app.use(cors()); 

global.Rbp = "https://lzo-gitee.gitee.io/gitee-static";

app.use("/",express.static(path.join(__dirname,'./www')))

//解析post请求体数据
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


let mainRouter = require('./router/homeRouter')
app.use('/home',mainRouter)



//开启服务
app.listen(3003, () => {
    console.log("server success to:http://localhost:3003/");
    global.thisServer = "http://localhost:3003/";
});