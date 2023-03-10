// Page transition variables
const sections = document.querySelectorAll(".section");
const sectionBtns = document.querySelectorAll(".controls");
const sectionBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

//Theme variables
const themeBtn = document.querySelector(".theme-btn");

// TODO:
// Modal Variables
const modal = document.querySelector(".modal");
const modals = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsCloseModal = document.querySelectorAll(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// Page transition
function PageTransition() {
  sectionBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const activeBtn = document.querySelectorAll(".active-btn");
      if (!btn.classList.contains("active-btn"))
        btn.classList.toggle("active-btn") &&
          activeBtn[0].classList.toggle("active-btn");
    });
  });

  // Switch to section
  allSections.addEventListener("click", (e) => {
    //e.preventDefault(); External links don't work with this option ON;
    const id = e.target.dataset.id;
    if (id) {
      // remove active
      sectionBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      // hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      // Activate corresponding section
      const element = document.getElementById(id);
      element.classList.add("active");

      // Force scroll to top of page on loading
      window.scrollTo(0, 0);
    }
  });
}
PageTransition();

// Theme dark and light toggle
function themeCheck() {
  let lightMode = sections[0].classList.contains("light-mode");
  if (lightMode) {
    themeBtn.innerHTML = `<i class="fa fa-moon-o" aria-hidden="true"></i>`;
  } else {
    themeBtn.innerHTML = `<i class="fa fa-sun-o" aria-hidden="true"></i>`;
  }
}

function themeToggle() {
  themeCheck();
  // activating light theme
  themeBtn.addEventListener("click", () => {
    sections.forEach((section) => {
      section.classList.toggle("light-mode");
      modals.forEach((modal) => {
        modal.classList.toggle("light-mode");
      });
    });

    // Changing button icon matching theme
    themeCheck();
  });
}
themeToggle();

// Modal window for project information

// Variables
let currentModal = "";

const openModal = function (e) {
  e.preventDefault();
  let myModal = document.getElementById(
    e.target.closest(".show-modal").getAttribute("href")
  );
  myModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  currentModal = myModal;
};

const closeModal = function () {
  currentModal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Trigger opening modal
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

// Trigger closing modal
for (let i = 0; i < btnsCloseModal.length; i++) {
  btnsCloseModal[i].addEventListener("click", closeModal);

  // Closing modal with Esc key:
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !currentModal.classList.contains("hidden")) {
      closeModal();
    }
  });
}

// Closing overlay
overlay.addEventListener("click", closeModal);
