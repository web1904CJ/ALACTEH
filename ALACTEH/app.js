const express=require('express');
//引入用户路由器
const myproRouter=require('./routes/mypro.js');
//引入body-parser中间件
const bodyParser=require('body-parser');
var app=express();
app.listen(8080);

//托管静态资源到public目录下
app.use( express.static('mypro') );
//使用body-parser中间件
app.use( bodyParser.urlencoded({
  extended:false  //不是第三方的qs模块，而是使用querystring模块
}) );

//使用路由器,  
// /user/reg
app.use( '/mypro',myproRouter );