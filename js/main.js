const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// hero section

window.onload = () => {
  const swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,

    speed: 1000,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
  });
};

// new products section
const swiper = new Swiper(".productsSwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,

  speed: 6000,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});
const swiperContainer = document.querySelector(".productsSwiper");

swiperContainer.addEventListener("mouseenter", () => {
  swiper.wrapperEl.style.transitionDuration = "0ms";
  swiper.autoplay.stop();
});

swiperContainer.addEventListener("mouseleave", () => {
  swiper.params.speed = 7000;

  swiper.autoplay.start();
});

// swiper reverse
const swiper2 = new Swiper(".productsSwiper2", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  speed: 6000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    reverseDirection: true,
  },
});

const swiperContainer2 = document.querySelector(".productsSwiper2");

swiperContainer2.addEventListener("mouseenter", () => {
  swiper2.wrapperEl.style.transitionDuration = "0ms";
  swiper2.autoplay.stop();
});

swiperContainer2.addEventListener("mouseleave", () => {
  swiper2.params.speed = 7000;
  swiper2.autoplay.start();
});

// articles section
const swiper3 = new Swiper(".articles-swiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  loop: true,
  speed: 800,
  navigation: {
    nextEl: ".articles-btn-next",
    prevEl: ".articles-btn-prev",
  },
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 3000,
});
