const swiper = new Swiper('.swiper-main', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,/* 
    mousewheel: true, */
    autoplay:true, 
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,/* 
    mousewheel: true, */
    autoplay:true,   
    slidesPerView: "auto",
    spaceBetween:32,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  const swiper3 = new Swiper(".mySwiper3", {
    loop: true,
    rewind:true,
    spaceBetween: 13,
    slidesPerView: 3,           
    navigation: {
        nextEl: ".swiper-button-next"            
      },
    breakpoints: {            
        768: {
          slidesPerView: 5,   
          spaceBetween: 17,           
        },  

        449: {
          slidesPerView: 4,   

        },  

    }        
  });
  
  const swiper4 = new Swiper(".mySwiper4", {
    rewind:true,
    height:500,
    spaceBetween: 10, 
    thumbs: {
      swiper: swiper3,
    },
  });
