$(function(){
      //animate()
      //queue() 排列数组
      //dequeue() 是一个连接的作用
      //delay(时间)是一个队列 延迟时间
/*
	$('.animation')
	.animate({width:500},400)
	.delay(1000)
	.queue(function(){
		$(this).css('backgroundColor','red').dequeue();
	})
	.animate({height:300},1000)*/
	/*  
	子弹

  for (var i = 0; i < 200; i++) {
    	
    
    var w=Math.floor(Math.random()*4+3)
    var b=Math.floor(Math.random()*100+155)
    var left=Math.floor(Math.random()*$(document).width())//随机的宽度
    var top=Math.floor(Math.random()*$(document).height())//随机的高度

	$("<div>")
	.addClass('zidan')//查入一个div，给
	.width(w)
	.height(w)
	.css({
		backgroundColor:'rgba(12,104,'+b+',0.4)'
	})
	.appendTo('body')
	.delay(i*10)
	.animate({
		left:left,
		top:top,
	})
}*/



$(document).on('click',function(){
	$('.zhuozi').addClass("animation");
	$('span').show();
	$('pai zuo').hide();
})	







/*建立一个数组*/
var poker=[]
var colort=['q','e','w','r'];
var biao={};
while(poker.length<52){
   var huase=colort[Math.floor(Math.random()*4)];
   var shuzi=Math.ceil(Math.random()*13);
   var itme={
   	huase:huase,
   	shuzi:shuzi
   }  
/*   去除重复  */
if(!biao[huase+'-'+shuzi]){
	poker.push(itme);
	biao[huase+'-'+shuzi]=true
}

}
var index=0;
//建立的一张表
var biao={
	1:'A',
	2:'2',
	3:'3',
	4:'4',
	5:'5',
	6:'6',
	7:'7',
	8:'8',
	9:'9',
	10:'10',
	11:'J',
	12:'Q',
	13:'K'
}

 

	/*var c=color[Math.floor(Math.random()*4)]*/

/*	poker.push({color:c,number:n}) */


// console.table(poker);
var d=4500;

for (var i = 0; i < 7; i++) {

 var t=i*60;//有间距
 for (var j = 0; j < (i+1); j++) {
 	d+=90;
 	index+=1;
 	var l=(6-i)*50+j*100;//
 	//创建一个div
$('<div>')
  .addClass('pai shang')
  .attr('id',i+'-'+j)
  .data('shuzi',poker[index].shuzi)
  .css({
       backgroundImage:'url(img/'+poker[index].shuzi+poker[index].huase+'.jpg)'


  })
.appendTo('.zhuozi')
.delay(d)
.animate({
	top:t,
  	left:l,
  	opacity:1
})


};
 };

//下面添加的扑克牌
for (; index < poker.length; index++) {
   d+=90;
	$("<div>")
	.addClass('pai zuo')
	.data('shuzi',poker[index].shuzi)
	.css({backgroundImage:'url(img/'+poker[index].shuzi+poker[index].huase+'.jpg)'
})
	.appendTo('.zhuozi')
	.delay(d)
	.animate({
		top:500,
		left:150
	})
	
};

   //这个就是和为13就消失
   var youu=function(el){
   	var x=Number($(el).attr('id').split('-')[0]);
   	var y=Number($(el).attr('id').split('-')[1]);
   	return $('#'+(x+1)+'-'+y).length||$('#'+(x+1)+'-'+(y+1)).length
   }

   var shangyizhang;

$('.zhuozi .pai').on('click',function(){
	//判断点击的牌有没有被压住
    if($(this).hasClass('shang') && youu($(this))){
                return;
    }
    //点第一张
    if($(this).data('shuzi')===13){
    	$(this).animate({
    		top:0,
    		left:600

    	}).queue(function(){
    		$(this).remove()
    	})
    	
    	return;
    }

    	
    //点击的牌做跳出动画
    $(this).toggleClass('chulie');
    if($(this).hasClass('chulie')){
     $(this).animate({top:'-=30'})
    }else{
         $(this).animate({top:'+=30'})
    }

    
if(!shangyizhang){
	shangyizhang=$(this)
	//点第二张
}else{
	if(shangyizhang.data('shuzi')+$(this).data('shuzi')===13){

	shangyizhang.delay(400).animate({
		top:0,
		left:600
	}).queue(function(){
		$(this).remove()
		
	})




	$(this).animate({
       top:0,
       left:600
	}).queue(function(){
		$(this).remove()
	})
	//不为13的情况
}else{
	$('.zhuozi .chulie')
	.removeClass('chulie')
	.animate({top:'+=30'})
}
shangyizhang=null;

}
})







var zIndex=0;
$('.move-right').on('click',function(){
	zIndex+=1;
	$('.zhuozi .zuo')
	.eq(-1)
	.removeClass('zuo')
	.addClass('you')
	.animate({
		top:500,
		left:480
	})
	.css({
		zIndex:zIndex
	})
})
var cishu=0;
$('.move-left').on('click',function(){
	if($('.zuo').length){
		alert('左边没发完')
		return
	}
	cishu+=1;
	if(cishu>3){
		alert('GAME  OVER')
		return;
	}
$('.you').each(function(i,el){
   $(this)
   .delay(i*50)
   .animate({
   	top:500,
   	left:150
   })
   .css({
   	zIndex:0
   })
   .removeClass('you')
   .addClass('zuo')
})

})

})











