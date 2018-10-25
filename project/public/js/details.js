//多标签页效果实现
$("#content1").css("z-index","10");
var $tab=$("[data-toggle=tabs]");
$tab.on("click",function(){
    $tab=$(this);
    $("#contents").children().css("z-index","0");
    var id=$tab.attr("data-target");
    var div=$(id);
    div.css("z-index","10");
})
$("#tabs").on("click","a",function(e){
    e.preventDefault();
    $a=$(this);
    $a.css({"border-bottom":"1px solid white","background": "white"})
        .siblings().css({"border-bottom":"1px solid #60606c","background": "#f0f1f3"});
})
//设置大背景图轮播
var bgurl=["url(./img/details/1-dbg-1.jpg)",
    "url(./img/details/1-dbg-2.jpg)",
    "url(./img/details/1-dbg-3.jpg)",
    "url(./img/details/1-dbg-4.jpg)",
    "url(./img/details/1-dbg-5.jpg)",
    "url(./img/details/1-dbg-6.jpg)"];
var i=1;
var timer=setInterval(function(){
    if(i<bgurl.length)
        i++;
    else
        i=0;
    $("div.my_bg").css("background",bgurl[i]);
    $("div.my_bg>ul>a:nth-child("+i+")").css("background-color","#fabe00")
        .siblings().css("background-color","white");
},2000)
$("div.my_bg").hover(function(){
    clearInterval(timer);
},function(){
    timer=setInterval(function(){
        if(i<bgurl.length)
            i++;
        else
            i=0;
        $("div.my_bg").css("background",bgurl[i]);
        $("div.my_bg>ul>a:nth-child("+i+")").css("background-color","#fabe00")
            .siblings().css("background-color","white");

    },2000)
})
$("div.my_bg>ul").on("click","a",function(e){
    e.preventDefault();
    $a=$(this);
    var i=$a.index()+1;
    $("div.my_bg").css("background",`url(./img/details/1-dbg-${i}.jpg)`);
    $a.css("background-color","#fabe00")
        .siblings().css("background-color","white");
})


