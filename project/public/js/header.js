$(function(){
    //1.d��̬����link����header.css
    $("<link rel='stylesheet' href='css/header.css'>").appendTo("head");
    //2.ajax����header.html
    $.ajax({
        url:"http://localhost:8686/header.html",
        type:"get",
        success:function(res){
            $("#header").replaceWith(res)
        }
    })
})