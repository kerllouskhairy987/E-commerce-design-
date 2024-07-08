let showList = document.querySelector("#showList");
let overlay = document.querySelector("#overlay");
let aside = document.querySelector("#aside");
let close = document.querySelector("#close");

showList.addEventListener("click", () => {
  overlay.classList.add("active");
  aside.classList.add("active");
});

close.addEventListener("click", () => {
  overlay.classList.remove("active");
  aside.classList.remove("active");
});

let dropLink = document.querySelector("#dropLink");
function showDropLink() {
  dropLink.classList.add("active");
}
function hideDropLink() {
  dropLink.classList.remove("active");
}

let aside_links = document.querySelector("#aside_links");
function showAsideLinks() {
  aside_links.classList.toggle("active");
}

let list_product = document.querySelector("#list_product");
function listProduct() {
  list_product.classList.toggle("active");
}

// Swipper Slider

var swiper = new Swiper(".slideProducts", {
  slidesPerView: 2,
  spaceBetween: 8,
  loop: Infinity,
  autoplay: true,
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    690: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

// Products Swipper
var swiper = new Swiper(".oneSwipper", {
  navigation: {
    nextEl: ".swiper-button-next-one",
    prevEl: ".swiper-button-prev-one",
  },
  autoplay: true,
  loop: Infinity,
});
///////////////////////////////////////////////////////**** */
var swiper = new Swiper(".twoSwipper", {
  navigation: {
    nextEl: ".swiper-button-next-two",
    prevEl: ".swiper-button-prev-two",
  },
  autoplay: true,
  loop: Infinity,
});
///////////////////////////////////////////////////////**** */
var swiper = new Swiper(".threeSwipper", {
  navigation: {
    nextEl: ".swiper-button-next-three",
    prevEl: ".swiper-button-prev-three",
  },
  autoplay: true,
  loop: Infinity,
});
///////////////////////////////////////////////////////**** */
