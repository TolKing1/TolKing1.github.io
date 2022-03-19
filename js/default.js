window.addEventListener('load', function(){
    let elBurger = document.querySelector('header .burger');
    let elNav = document.querySelector('.sidebar');
    elBurger.onclick = function(){
        elNav.classList.toggle('active');
        elBurger.classList.toggle('active');
    }
    //Search
        $('.header__search-img').click(function(e){
            e.preventDefault();
            $('.header__search-input').toggleClass('active')
        })
        $('.sidebar__search-img').click(function(e){
            e.preventDefault();
            $('.sidebar__search-input').toggleClass('active')
        })
    // Modal 
    $('.modal__submit-btn').click(function(e){
        e.preventDefault()
    })
    $('.item__card-btn').click(function(){
        
        $('.modal__overlay').fadeIn();
        $('.modal__popup').addClass('active');
        $('.modal__phone').html($(this).parent().children('.item__card-title').html())
        
    })
    $('.modal__close-btn').click(function(){
        $('.modal__overlay').fadeOut();
        $('.modal__popup').removeClass('active');
    })


})

// Owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:false,
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
            nav:false,
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