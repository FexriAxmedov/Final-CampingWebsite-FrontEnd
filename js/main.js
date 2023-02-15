let sr=ScrollReveal()






const header=document.querySelector("header");
// sticky navbar
function stickyNavbar(){
    header.classList.toggle("scrolled",window.pageYOffset > 0);
}

window.addEventListener("scroll",stickyNavbar);


$(document).ready(function(){
    $('.const').removeClass('categories');
});
$('.bycategory').click(function(){
    $('.const').toggleClass('categories');
  });

