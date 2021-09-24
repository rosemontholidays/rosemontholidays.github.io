$(document).ready(function () {
    $('.food-slider').slick({
        // autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: ".prev-btn",
        nextArrow: ".next-btn",
        responsive:[
        {
            breakpoint:992,
            settings:{
            slidesToShow: 2,
            }
        },
        
        {
            breakpoint:768,
            settings:{
            slidesToShow: 1,
            }
        }
        ]


    });

    // $('.nav-trigger').click(function(){
    //     $('.site-content-wrapper').toggleClass('scaled')
    // })
});


// scroll reveal

window.sr = ScrollReveal();

sr.reveal('.animate-left',{
origin: 'left',
duration: 1000,
distance: '25rem',
delay: 800
});


sr.reveal('.animate-right',{
origin: 'right',
duration: 1000,
distance: '25rem',
delay: 1200
});

sr.reveal('.animate-top',{
origin: 'top',
duration: 1000,
distance: '25rem',
delay: 1600
});

sr.reveal('.animate-bottom',{
origin: 'bottom',
duration: 1000,
distance: '25rem',
delay: 1600
});