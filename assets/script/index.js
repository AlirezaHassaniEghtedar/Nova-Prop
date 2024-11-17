const mobileMenuIcon = document.querySelector(".hamburger-menu");
const mobileNavMenu = document.querySelector('header nav')
const mobileNavMenuCloseBtn = document.querySelector('header .close-btn')
const headerPlansSectionBtn = document.querySelector('header ul li.headerPlansBtn')
const plansSectionButtons = document.querySelectorAll('#plansSection .plansHeaders button')
const swiperPlansSlidersContainer = document.querySelectorAll('#plansSection .swiper-container')

mobileMenuIcon.addEventListener("click", handleHamburgerMobileMenuClick);
mobileNavMenuCloseBtn.addEventListener('click' , handleMobileNavMenuClose)
headerPlansSectionBtn.addEventListener('click' , handleMobileNavMenuClose)
plansSectionButtons.forEach(button => button.addEventListener('click' , handlePlansButtonsClick))
document.addEventListener('click' , handleCloseMenuOnDocumentClick)

function handleCloseMenuOnDocumentClick (e) {
  if (!mobileNavMenu.contains(e.target) && !mobileMenuIcon.contains(e.target)) {
    handleMobileNavMenuClose()
  }
}

function handlePlansButtonsClick (e) {
  plansSectionButtons.forEach(button => button.classList.remove('active'))
  e.target.classList.add('active')

  swiperPlansSlidersContainer.forEach(swiper => {
    swiper.classList.remove('active-tab')
    console.log(e.target.getAttribute('content'));
    
    if(swiper.classList.contains(e.target.getAttribute('content'))) {
      swiper.classList.add('active-tab')
    }
  })
}
function handleMobileNavMenuClose () {
  if(mobileNavMenu.classList.contains('active')) {
    mobileNavMenu.classList.remove('active')
  }
}

function handleHamburgerMobileMenuClick(e) {
  mobileNavMenu.classList.add('active')
}

var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

var swiper_A = new Swiper(".swiper-container.plans-A .myPlansSwiper", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  pagination: {
    el: "#plansSection .swiper-pagination.plans-A",
    clickable: true,
  },
  navigation: {
    nextEl: "#plansSection .swiper-button-next.plans-A",
    prevEl: "#plansSection .swiper-button-prev.plans-A",
  },

  breakpoints: {
    570: {
      slidesPerView : 2 ,
      spaceBetween : 15,
    },
    767: {
      slidesPerView : 2 ,
      spaceBetween : 15,
    },
    840: {
      slidesPerView : 2 ,
      spaceBetween : 20,
    },
    1150: {
      slidesPerView : 3 ,
      spaceBetween : 25,
    },
  }
});
var swiper_B = new Swiper(".swiper-container.plans-B .myPlansSwiper", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  pagination: {
    el: "#plansSection .swiper-pagination.plans-B",
    clickable: true,
  },
  navigation: {
    nextEl: "#plansSection .swiper-button-next.plans-B",
    prevEl: "#plansSection .swiper-button-prev.plans-B",
  },

  breakpoints: {
    570: {
      slidesPerView : 2 ,
      spaceBetween : 15,
    },
    767: {
      slidesPerView : 2 ,
      spaceBetween : 15,
    },
    840: {
      slidesPerView : 2 ,
      spaceBetween : 20,
    },
    1150: {
      slidesPerView : 3 ,
      spaceBetween : 25,
    },
  }
});
var swiper_C = new Swiper(".swiper-container.plans-C .myPlansSwiper", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  pagination: {
    el: "#plansSection .swiper-pagination.plans-C",
    clickable: true,
  },
  navigation: {
    nextEl: "#plansSection .swiper-button-next.plans-C",
    prevEl: "#plansSection .swiper-button-prev.plans-C",
  },

  breakpoints: {
    570: {
      slidesPerView : 2 ,
      spaceBetween : 15,
    },
    767: {
      slidesPerView : 2 ,
      spaceBetween : 15,
    },
    840: {
      slidesPerView : 2 ,
      spaceBetween : 20,
    },
    1150: {
      slidesPerView : 3 ,
      spaceBetween : 25,
    },
  }
});

var swiper = new Swiper(".myBlogSwiper", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  pagination: {
    el: "#blogSection .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: "#blogSection .swiper-button-next",
    prevEl: "#blogSection .swiper-button-prev",
  },
  breakpoints: {
    570: {
      slidesPerView : 2 ,
      spaceBetween : 15,
    },
    767: {
      slidesPerView : 2 ,
      spaceBetween : 15,
    },
    840: {
      slidesPerView : 2 ,
      spaceBetween : 20,
    },
    1150: {
      slidesPerView : 3 ,
      spaceBetween : 25,
    },
  }
});