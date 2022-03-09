window.addEventListener('load', function(){
    let elBurger = document.querySelector('header .burger');
    let elNav = document.querySelector('.sidebar')
    elBurger.onclick = function(){
        elNav.classList.toggle('active')
        elBurger.classList.toggle('active')
        
    }



})
$('.owl-carousel').owlCarousel({
    loop:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true,
            margin:12,
            center:true
            
        },
        576:{
            items:2,
            nav:false,
            margin:5
        },
        768:{
            items:3,
            nav:true,
            loop:true,
            margin:10,
        },
        992:{
            items:3,
            nav:true,
            loop:true
        },
        1200:{
            items:4,
            nav:true,
            loop:true
        },

    }
})

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });