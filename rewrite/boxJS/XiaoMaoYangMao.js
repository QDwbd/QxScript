/**************************
 *  * @Author: XiaoMao
 * @LastMod: 2023-07-21
 *
 * 


\实\时\线\报\ \羊\毛\活\动\


仅供学习参考，请于下载后24小时内删除

********************************
# 小版本更新请查看更新日志 ｜ 或加入xiaomao组织⬇️
# 微信公众号 【小帽集团】
# XiaoMao · Tg频道频道：https://t.me/xiaomaoJT
# XiaoMao · GitHub仓库：https://github.com/xiaomaoJT/QxScript


使用方法：

⚠️ 配置文件 [task_local] 标签添加以下代码即可 或 于自动任务栏(三横杠按钮)，右上角加号，以文本方式添加以下代码即可。

0 0/20 0,1,2,3,7,8,9,10,11,12,13,14,15,17,18,19,20,21,23 * * ?  https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/XiaoMaoYangMao.js, tag=🐑XiaoMao_实时线报, img-url=https://raw.githubusercontent.com/tugepaopao/Image-Storage/master/cartoon/Cute1/1689356.png, enabled=true

单独脚本地址：
https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/XiaoMaoYangMao.js



须知：
默认每天7点到次日3点，每20分钟运行一次。


********************************/



let url="http://www.0818tuan.com/list-1-0.html";let option={url:encodeURI(url),method:"GET",headers:{"User-Agent":"Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36",},};$task.fetch(option).then((response)=>{let obj=response.body.replace(/\s*/g,"").toString();let startIndex=obj.indexOf('<divclass="list-group"');let endIndex=obj.substring(startIndex,obj.length).indexOf('<divclass="pagerlist_page">');let subContent=obj.substring(startIndex,startIndex+endIndex);let temArr=subContent.split("<a");let subArr=temArr.slice(4,temArr.length);let subObjArr=[];let resultText="";if(subArr.length){let adReg=/\d+\./;let shopReg=/猫超|包邮|券|买\d件|拍\d件/;subArr.forEach((el)=>{let textUrlStart=el.indexOf('href="');let textUrlEnd=el.indexOf('"target');let textTitleStart=el.indexOf('title="');let textTitleEnd=el.indexOf('"class=');let textTimeStart=el.indexOf('successred">');let textTimeEnd=el.indexOf("</span>");let url="http://www.0818tuan.com"+el.substring(textUrlStart+6,textUrlEnd);let title=el.substring(textTitleStart+7,textTitleEnd);let time=el.substring(textTimeStart+12,textTimeEnd);if(!adReg.test(title)&&!shopReg.test(title))subObjArr.push({url:url,title:title,time:time,})});resultText="🛟最新线报活动获取成功，"+"数据最新更新时间（"+subObjArr[0].time+"）,共获取到"+subObjArr.length+"条数据。"+"\n\n";subObjArr.forEach((el,i)=>{resultText=resultText+"🏷["+(i+1)+"] "+"["+el.time+"] "+el.title+"\n"+"🔗原文链接："+el.url+"\n\n"});$notify("🐑XiaoMao_实时线报❗️","",resultText)}else{$notify("🚨XiaoMao_实时线报❗️","","🚧获取失败(error_1)，请稍后再试❗️",{"open-url":"https://i.pixiv.re/img-original/img/2014/02/01/21/15/37/41323022_p0.jpg","media-url":"https://i.pixiv.re/img-original/img/2014/02/01/21/15/37/41323022_p0.jpg",})}}).catch((err)=>{$notify("🚨XiaoMao_实时线报❗️","","🚧获取失败(error_2)，请稍后再试❗️",{"open-url":"https://i.pixiv.re/img-original/img/2014/02/01/21/15/37/41323022_p0.jpg","media-url":"https://i.pixiv.re/img-original/img/2014/02/01/21/15/37/41323022_p0.jpg",})});setTimeout(()=>{$done({})},2000);