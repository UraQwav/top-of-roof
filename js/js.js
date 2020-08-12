/*------------Change_Color---------*/
$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".header").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".header").removeClass("active");
    }
});
/*------------Move_down------------*/
(function() { 
'use strict'; 

var btnScrollDown = document.querySelector('#scroll_down'); 

function scrollDown() { 
var windowCoords = document.documentElement.clientHeight-100; 
(function scroll() { 
if (window.pageYOffset < windowCoords) { 
window.scrollBy(0, 8); 
setTimeout(scroll, 0); 
} 
if (window.pageYOffset > windowCoords) { 
window.scrollTo(0, windowCoords); 
} 
})(); 
} 

btnScrollDown.addEventListener('click', scrollDown); 
})(); 