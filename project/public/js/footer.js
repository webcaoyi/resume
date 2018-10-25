$(function(){
    //1.d动态创建link引入header.css
    $("<link rel='stylesheet' href='css/footer.css'>").appendTo("head");
    //2.ajax请求header.html
    $.ajax({
        url:"http://localhost:8686/footer.html",
        type:"get",
        success:function(res){
            $("#footer").replaceWith(res)
        }
    })
})