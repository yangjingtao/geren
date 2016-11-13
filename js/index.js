$(function(){
    /*侧边栏导航*/
    var h=$(window).height();
    var w=$(window).width();
    $(".left-hide").css({height:h});
    var i=0;
    $(".button").click(function(){
        i++;
        if(i%2==1){
            $(".left-hide").animate({left:0},300);
        }else{
            $(".left-hide").animate({left:-200},300);
        }
    });
    /*轮播图自适应屏幕*/
    var tw=$(".wheel img").width();
    var th=$(".wheel img").height();
    $(window).resize(function(){
        var cw=$(window).width();
        var bili=cw/w;
        $(".wheel").css({height:th*bili+"px"});
        $(".wheel img").css({height:th*bili+"px"});
        if(w>=900){
            $(".left-hide").animate({left:-200},300);
        }
    })

    /*轮播图*/
    var l=0;
    $(".banner li").hide();
    $(".banner li").eq(0).show();
    function move(){
        l++;
        var len=$(".banner li").length;
        if(l==len){
            l=0;
        }

        $(".banner li").finish();
        $(".banner li").fadeOut();
        $(".banner li").eq(l).fadeIn(500);
    }
    var t=setInterval(move,3000);
    
    
    /*底部淡出*/
    $('.animated-item').each(function() {
        var timeDelay = $(this).attr('data-delay');
        $(this).appear(function() {
            var $that = $(this);
            setTimeout(function () {
                $that.addClass('animated');
            }, timeDelay);
        },{accX: 0, accY: -150});

    });
    $(".hover-int").hide();
    $(".animated-item").hover(function(){
        var index=$(this).index();
        $(".hover-int").finish();
        $(".hover-int").eq(index).slideDown(600);
    },function(){
        var index=$(this).index();
        $(".hover-int").finish();
        $(".hover-int").eq(index).slideUp(600);
    })


    /*留言板*/
    
})