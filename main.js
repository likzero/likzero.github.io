$(function(){
////////////////////////////////////

$("#Song_portfolio").fullpage({
    anchors:['intro', 'm01', 'm02', 'm03', 'm04', 'm05', 'info'],
    // navigation: true,
    afterLoad:function(origin, destination, direction){
        // console.log("여기는" + AudioDestinationNode.index)
        $(".section").eq(destination.index).addClass("on").siblings().removeClass("on");
        //nav ul li
        $("nav ul li").eq(destination.index).addClass("on").siblings().removeClass("on");

    },
});

$(".xi-pause.vod").on("click", function(){
    $(this).parent().parent().siblings().find("video").trigger("pause");
});
$(".xi-play.vod").on("click", function(){
    $(this).parent().parent().siblings().find("video").trigger("play");
});

$(".visual_slider").slick({
    arrows:false,
    dots:true,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
})


$(".slider_arrows i.right").on("click", function(){
    $(".visual_slider").slick("slickNext");
});
$(".slider_arrows i.left").on("click", function(){
    $(".visual_slider").slick("slickPrev");
});

$("header .mopen").on("click",function(){
    $(this).toggleClass("on");
    $(".cover").toggleClass("on");
})

$(".cover li a").on("click", function(){
    $(".cover").removeClass("on");
})
var options={
    strings:['Songminju 2021 portFolio'],
    typeSpeed:100
};

vartyped = new Typed('.intro_slogan .txt', options);

});
