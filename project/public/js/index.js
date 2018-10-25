$(".d3 .simg>.nsimg").hover(function(){
        $(".d3 .simg>.nsimg>img:first-child").animate({"margin-top":-850},7000);
    },
    function(){
        $(".d3 .simg>.nsimg>img:first-child").animate({"margin-top":0},7000);
    }

)