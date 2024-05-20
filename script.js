document.addEventListener("DOMContentLoaded", () => {
  console.log("here");
  const menu = document.querySelector("#menu-bar");
  const navbar = document.querySelector(".nav-bar");

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

  const modalBox = document.querySelector(".popUp");
  const closeModalBox = document.querySelector(".close-btn");
  const openModalBox = document.querySelectorAll(".btn__open-Modal");
  const overlay = document.querySelector(".pop-Overlay");
  const emailTag = document.querySelector(".Email");
  const myName = document.querySelector(".name");
  const submitBtn = document.querySelector(".submit-Btn");

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

  // submitBtn.addEventListener("click", e => {
  //     e.preventDefault();

  //     if (emailTag.value === "" || passwordTag.value === "") {
  //         alert('Ensure you input a value in both');
  //     }
  //     else{
  //         alert('successful submission');
  //     }

  //     popupBox.classList.toggle("active");

  // });

  const employeeImage = document.querySelector("#employee-img");
  const employeeSub = document.querySelector("#employee-sub");
  const employeeText = document.querySelector("#employee-text");

  const btn = document.querySelectorAll(".btn-slide");
  let index = 0;
  const employees = [];

  function createEmployee(img, sub, text) {
    let image = `/images2/${img}.jpg`; //image targetting not working yet

    employees.push({ img: image, sub, text });
  }

  createEmployee(
    "100",
    "Legend",
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporaculpa aliquid ratione vero.",
    " Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit, amet consectetur adipisicing elit. Aliquam, iusto? Ad,ullam repellendus corporis ipsam consequuntur nam esse modiiusto, id necessitatibus eum?..."
  );
  createEmployee(
    "200",
    "Wise One",
    " coqwonifn Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporaculpa aliquid ratione vero.",
    " Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit, amet consectetur adipisicing elit. Aliquam, iusto? Ad,ullam repellendus corporis ipsam consequuntur nam esse modiiusto, id necessitatibus eum?..."
  );
  createEmployee(
    "300",
    "Prayer Prayer Person",
    " follow her go na ipsum dolor sit amet consectetur adipisicing elit. Temporaculpa aliquid ratione vero.",
    " Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit, amet consectetur adipisicing elit. Aliquam, iusto? Ad,ullam repellendus corporis ipsam consequuntur nam esse modiiusto, id necessitatibus eum?..."
  );
  createEmployee(
    "400",
    "Heavenly Secretary",
    " Wait i was just joking ipsum dolor sit amet consectetur adipisicing elit. Temporaculpa aliquid ratione vero.",
    " Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit, amet consectetur adipisicing elit. Aliquam, iusto? Ad,ullam repellendus corporis ipsam consequuntur nam esse modiiusto, id necessitatibus eum?..."
  );

  btn.forEach(function (button) {
    button.addEventListener("click", function (e) {
      if (e.target.parentElement.classList.contains("prev")) {
        if (index === 0) {
          index = employees.length;
        }
        index--;
        employeeImage.src = employees[index].img;
        employeeSub.textContent = employees[index].sub;
        employeeText.textContent = employees[index].text;
      }

      if (e.target.parentElement.classList.contains("next")) {
        index++;
        if (index === employees.length) {
          index = 0;
        }

        employeeImage.src = employees[index].img;
        employeeSub.textContent = employees[index].sub;
        employeeText.textContent = employees[index].text;
        console.log(employees);
      }
    });
  });
});
