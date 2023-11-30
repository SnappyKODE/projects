let effect_hover = $(".blur");

effect_hover.mouseover(function(){
    $(this).removeClass("hide");

})

effect_hover.mouseleave(function(){
    $(this).addClass("hide");
})