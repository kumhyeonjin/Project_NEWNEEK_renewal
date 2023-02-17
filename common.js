// swiper (Responsive breakpoints)

let newsRecent = new Swiper(".news_recent", {
  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
  },
  slidesPerView: 1,
  breakpoints: {
    800: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

// 햄버거 버튼
const $ham = document.querySelector(".ham");
const $topNav = document.querySelector(".top_nav");
$ham.addEventListener("click", function () {
  $topNav.classList.toggle("on");
});
