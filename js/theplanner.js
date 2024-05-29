$(document).ready(function(){
    spainCity();
    pinkPlus();
    titlehamburger();
});

function spainCity(){
    var cityLists = $(".cityList").bxSlider({
        maxSlides: 4,
        minSlides: 1,
        slideWidth: 320,
        slideMargin: 130,
        pager: false,
        wrapperClass: "mainWedding"

    });
}


function pinkPlus(){
    $('.accComponent>ul>li>h3').click(function(){
        $(this).toggleClass("active");
    });
}


function titlehamburger(){
    $("header > div > div label").click(function(){
        $("#plannerswedding").toggleClass("actived");
    });
    $("aside > nav > label").click(function(){ 
        $("#plannerswedding").toggleClass("actived"); 
    });
}
