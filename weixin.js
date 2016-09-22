'use strict';
const express=require('express');
const url=require('url');
const qs=require('querystring');
//引入xml格式转换的包
const parseString = require('xml2js').parseString;
let app=express();
app.all('/check',(req,res)=>{
	console.log(req.method);
	req.on('data',(bodystr)=>{
		//将xml格式转换为对象
		parseString(bodystr.toString(), function (err, result) {
			//从对象里面取出输入的值
			let xmlstr=result.xml.Content[0];
			if(xmlstr.trim()=='3'){
				// console.log(xmlstr.trim())
				let resFmt = `
				<xml>
				<ToUserName><![CDATA[${result.xml.FromUserName[0]}]]></ToUserName>
				<FromUserName><![CDATA[${result.xml.ToUserName[0]}]]></FromUserName>
				<CreateTime>12345678</CreateTime>
				<MsgType><![CDATA[news]]></MsgType>
				<ArticleCount>1</ArticleCount>
				<Articles>
				<item>
				<Title><![CDATA[nodejs基础开发]]></Title> 
				<Description><![CDATA[nodejs的核心模块学习]]></Description>
				<PicUrl><![CDATA[http://odsgcf9m3.bkt.clouddn.com/psu.jpg]]></PicUrl>
				<Url><![CDATA[http://wl.ittun.com/index.html]]></Url>
				</item>			
				</Articles>
				</xml>`;
				//响应回去
			res.end(resFmt);
			}if(xmlstr.trim()=='5'){
				// console.log(xmlstr.trim())
				let resFmt = `
				<xml>
				<ToUserName><![CDATA[${result.xml.FromUserName[0]}]]></ToUserName>
				<FromUserName><![CDATA[${result.xml.ToUserName[0]}]]></FromUserName>
				<CreateTime>12345678</CreateTime>
				<MsgType><![CDATA[news]]></MsgType>
				<ArticleCount>1</ArticleCount>
				<Articles>
				<item>
				<Title><![CDATA[后台数据管理]]></Title> 
				<Description><![CDATA[node.js视屏的添加和更改]]></Description>
				<PicUrl><![CDATA[http://odsgcf9m3.bkt.clouddn.com/QQ%E6%88%AA%E5%9B%BE20160920002228.png]]></PicUrl>
				<Url><![CDATA[http://wulong.ittun.com/admin/list/3/1]]></Url>
				</item>			
				</Articles>
				</xml>`;
				//响应回去
			res.end(resFmt);
			}else if(xmlstr.trim()=='4'){
				let resFmt = `
				<xml>
				<ToUserName><![CDATA[${result.xml.FromUserName[0]}]]></ToUserName>
				<FromUserName><![CDATA[${result.xml.ToUserName[0]}]]></FromUserName>
				<CreateTime>12345678</CreateTime>
				<MsgType><![CDATA[text]]></MsgType>
				<Content><![CDATA[谢谢你的反馈,请留意以便我们提高改进！]]></Content>
				</xml>`;
			res.end(resFmt);
			}else if(xmlstr.trim()=='1'){
				let resFmt = `
				<xml>
				<ToUserName><![CDATA[${result.xml.FromUserName[0]}]]></ToUserName>
				<FromUserName><![CDATA[${result.xml.ToUserName[0]}]]></FromUserName>
				<CreateTime>12345678</CreateTime>
				<MsgType><![CDATA[text]]></MsgType>
				<Content><![CDATA[你好,我叫吴龙,欢迎来到我的公众号平台,喜欢我就加我吧!]]></Content>
				</xml>`;
			res.end(resFmt);
			}else if(xmlstr.trim()=='2'){
				let resFmt = `
				<xml>
				<ToUserName><![CDATA[${result.xml.FromUserName[0]}]]></ToUserName>
				<FromUserName><![CDATA[${result.xml.ToUserName[0]}]]></FromUserName>
				<CreateTime>12345678</CreateTime>
				<MsgType><![CDATA[text]]></MsgType>
				<Content><![CDATA[  我的微信号:wl348593513
								  我的QQ号:348593513
								  我的手机号:15813147505]]></Content>
				</xml>`;
			res.end(resFmt);
			}else{
				let resFmt = `
				<xml>
				<ToUserName><![CDATA[${result.xml.FromUserName[0]}]]></ToUserName>
				<FromUserName><![CDATA[${result.xml.ToUserName[0]}]]></FromUserName>
				<CreateTime>12345678</CreateTime>
				<MsgType><![CDATA[text]]></MsgType>
				<Content><![CDATA[  回复1:了解我
								  回复2:联系我
								  回复3:学习node.js视频
								  回复4:给予您真诚的反馈或意见
								  回复5:个人管理]]></Content>
				</xml>`;
			res.end(resFmt);
			}

		});
	})

// <xml><ToUserName><![CDATA[gh_9bca317eac86]]></ToUserName>
// <FromUserName><![CDATA[ottBzwSLEZRN3GzWBk5QDF4oOSf0]]></FromUserName>
// <CreateTime>1474460646</CreateTime>
// <MsgType><![CDATA[text]]></MsgType>
// <Content><![CDATA[hello]]></Content>
// <MsgId>6332760254363709788</MsgId>
// </xml>



// { xml:
//    { ToUserName: [ 'gh_9bca317eac86' ],
//      FromUserName: [ 'ottBzwSLEZRN3GzWBk5QDF4oOSf0' ],
//      CreateTime: [ '1474460819' ],
//      MsgType: [ 'text' ],
//      Content: [ '1' ],
//      MsgId: [ '6332760997393052023' ] } }


	// console.log(111);
	// // 获取微信发过来的网址
	// let href=req.url;
	// // //获取微信发过来的网址转换为对象
	// let querystr=url.parse(href).query;
	// // //获得传过来的参数转换为对象
	// let str=qs.parse(querystr).echostr;
	// res.end(str)
});
app.listen(6003,'127.0.0.1',()=>{
	console.log('微信端口已经打开6003');
});