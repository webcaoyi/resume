//使用express构建web服务器
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
/*引入路由模块*/
const details=require("./routes/details");

var app = express();
var server = app.listen(8686);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('../public'));

app.use(session({
    secret: '128位随机字符串',
    resave: false,
    saveUninitialized: true,
}))
/*使用路由器来管理路由*/
app.use("/details",details);