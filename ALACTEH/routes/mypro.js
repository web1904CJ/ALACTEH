const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//添加路由
//添加路由
//1.用户注册
router.post('/reg',function(req,res){
	//获取post请求的数据
	var obj=req.body;
	//验证每一项的数据是否为空
	if(!obj.email){
		res.send({code:401,msg:'email required'});
		return;
	  }
	if(!obj.upwd){
		res.send({code:402,msg:'upwd required'});
		return;
	  }
	if(!obj.uname){
	  res.send({code:403,msg:'uname require'});
	  //return 阻止往后执行
	  return;
	}	
	
	if(!obj.phone){
	  res.send({code:404,msg:'phone required'});
	  return;
	}
	//执行SQL语句
	pool.query('INSERT INTO xz_user SET ?',[obj],function(err,result){
	  if(err) throw err;
	  console.log(result);
	  //判断是否插入成功
	  if(result.affectedRows>0){
		res.send({code:200,msg:'reg success'});
	  }
	});
  });



  /*

//1.登录  get
router.get("/v1/login/:uname-:upwd",(req,res)=>{
	var $uname=req.params.uname;
	var $upwd=req.params.upwd;
	var sql="select * from xz_user where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
//2.用户列表  
router.get("/v1/userlist",(req,res)=>{
	var sql="select * from xz_user";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
	});
})
//3.删除
router.delete("/v1/deluser/:uid",(req,res)=>{
	var $uid=req.params.uid;
	var sql="delete from xz_user where uid=?";
	pool.query(sql,[$uid],(err,result)=>{
		if(err) throw err;
		res.send("1");
	});
});
//4.根据id查询用户
router.get("/v1/query/:uid",(req,res)=>{
	var $uid=req.params.uid;
	var sql="select * from xz_user where uid=?";
	pool.query(sql,[$uid],(err,result)=>{
		if(result.length>0){
			res.send(result);
		}else{
			res.send("0");
		}
	});
});
//修改
router.put("/v1/update",(req,res)=>{

	//获取参数
	var $uid=req.body.uid;
	var $uname=req.body.uname;
	var $email=req.body.email;
	var $phone=req.body.phone;
	var $user_name=req.body.user_name;
	var $gender=req.body.gender;
	//非空验证
	if(!$uid){res.send("uid未接收到");return;}
	if(!$uname){res.send("uname未接收到");return;}
	if(!$email){res.send("email未接收到");return;}
	if(!$phone){res.send("phone未接收到");return;}
	if(!$user_name){res.send("user_name未接收到");return;}
	if(!$gender){res.send("gender未接收到");return;}
	var sql="update xz_user set uname=?,email=?,phone=?,user_name=?,gender=? where uid=?";
	pool.query(sql,[$uname,$email,$phone,$user_name,$gender,$uid],(err,result)=>{
		if(err) throw err;
		res.send("1");//1代表修改成功
	});  
});

*/

//导出路由器
module.exports=router;

