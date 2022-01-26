window.addEventListener('load',function(){
    const elBtn = this.document.querySelector('header .header__shop .header__shop-card .btn');
    elBtn.addEventListener('click',function(){
        this.style.boxShadow = 'none';
    })
})

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 8,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive:{
            20:{
                items:2,
                loop: true,
                autoplay: true,
                autoplayTimeout: 1600,
            },
            320:{
                items:3,
                loop: true,
                autoplay: true,
                autoplayTimeout: 1600,
            },
            576:{
                items:4,
                loop: true,
                autoplay: true,
                autoplayTimeout: 1700,
            },
            768:{
                items:5,
                loop: true,
                autoplay: true,
                autoplayTimeout: 1800,
            },
            992:{
                items:8,
                loop: true,
                autoplay: true,
                autoplayTimeout: 2000,
            }
        }

    });
  });