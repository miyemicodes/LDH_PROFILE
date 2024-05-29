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
