$(document).ready(function(){
   $('.food-slider').slick({
      autoplay:true,
     slidesToShow:3,
     slidesToScroll:1,
     prevArrow:".prev-btn",
     nextArrow:".next-btn",
     responsive:[
        {
           breakpoint:992,
           settings:{
            slidesToShow:2,
           }
        },
        {
         breakpoint:768,
         settings:{
          slidesToShow:1,
         }
      }
     ]

   });

   $('.nav-trigger').click(function(){
      $('.site-content-wrapper').toggleClass('scaled');
   })
});

document.addEventListener('DOMContentLoaded', () => {
   const sections = document.querySelectorAll('section');
   const navLinks = document.querySelectorAll('.navbar a');

   window.addEventListener('scroll', () => {
       let current = '';

       sections.forEach(section => {
           const sectionTop = section.offsetTop;
           const sectionHeight = section.clientHeight;
           if (window.scrollY >= sectionTop - sectionHeight / 3) {
               current = section.getAttribute('id');
           }
       });

       navLinks.forEach(link => {
           link.classList.remove('active');
           if (link.classList.contains(`nav-${current}`)) {
               link.classList.add('active');
           }
       });
   });
});


