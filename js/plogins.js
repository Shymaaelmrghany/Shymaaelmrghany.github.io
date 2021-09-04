// show 
$(".gear").click(function(){
    $(".color-option").fadeToggle()
})

// change theme color on click 

var colorLi = $(".color-option ul li");

colorLi
    .eq(0).css("background-color","#198754").end()
    .eq(1).css("background-color","#E41B17").end()
    .eq(2).css("background-color","#c21bd8").end()
    .eq(3).css("background-color","#2683fd")

colorLi.click(function(){
    $("link[href*='theme']").attr("href", $(this).attr("data-value"))

// scroll top 

var scrollButton = $(".scroll-top");

$(window).scroll(function()
{
    $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();
})

// click on scroll button 
scrollButton.click(function()
{
    $("html,body").animate({scrollTop : 0 },600);
})



})
// loading elements 
$(".loading-screen .loader").fadeOut(2000,
function()
{
    $(this).parent().fadeOut(2000)
})
// nice scroll 
$("html").niceScroll();