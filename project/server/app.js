//ʹ��express����web������
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
/*����·��ģ��*/
const details=require("./routes/details");

var app = express();
var server = app.listen(8686);
//ʹ��body-parser�м��
app.use(bodyParser.urlencoded({extended:false}));
//�йܾ�̬��Դ��publicĿ¼��
app.use(express.static('../public'));

app.use(session({
    secret: '128λ����ַ���',
    resave: false,
    saveUninitialized: true,
}))
/*ʹ��·����������·��*/
app.use("/details",details);