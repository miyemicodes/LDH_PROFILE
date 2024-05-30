const menu = document.querySelector("#menu-bar");
const navbar = document.querySelector(".nav-bar");
const modalBox = document.querySelector(".popUp");
const closeModalBox = document.querySelector(".close-btn");
const openModalBox = document.querySelectorAll(".btn__open-Modal");
const overlay = document.querySelector(".pop-Overlay");
const emailTag = document.querySelector(".Email");
const myName = document.querySelector(".name");
const submitBtn = document.querySelector(".submit-Btn");
const navs = document.querySelector(".nav-bar");

menu.addEventListener("click", function () {
  menu.classList.toggle("fa-close");
  navbar.classList.toggle("active");
});

window.onscroll = () => {
  menu.classList.remove("fa-close");
  navbar.classList.remove("active");
};

document.querySelector("#search-icon").addEventListener("click", function () {
  document.querySelector("#search-form").classList.toggle("active");
});

document.querySelector("#close").addEventListener("click", function () {
  document.querySelector("#search-form").classList.remove("active");
});

navs.addEventListener("click", function (e) {
  e.preventDefault();

  console.log(e.target);
  if (e.target.classList.contains("nav_link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

const openModal = function (e) {
  e.preventDefault();
  modalBox.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function (e) {
  e.preventDefault();
  modalBox.classList.add("hidden");
  overlay.classList.add("hidden");
};

openModalBox.forEach((btn) => btn.addEventListener("click", openModal));
closeModalBox.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  myName.value && emailTag.value
    ? alert("successful submission")
    : alert("Ensure you input a value in both");
});

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".prevBtn");
  const btnRight = document.querySelector(".nextBtn");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
