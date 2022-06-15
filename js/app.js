const swiper = new Swiper('.main__slider', {
    speed: 500,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });
  const swiperGallary = new Swiper('.gallary__slider', {
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      460: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      580:{
        slidesPerView: 3,
        spaceBetween: 10,
        
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      }
    },
    speed: 500,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });


