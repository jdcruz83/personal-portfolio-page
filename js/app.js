const sections = document.querySelectorAll(".section");
const sectionBtns = document.querySelectorAll(".controls");
const sectionBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");
const themeBtn = document.querySelector(".theme-btn");

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
    e.preventDefault();
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
    }
  });
}
PageTransition();

// Theme dark and light switch
function themeCheck() {
  let lightMode = sections[0].classList.contains("light-mode");
  if (lightMode) {
    themeBtn.innerHTML = `<i class="fa fa-moon-o" aria-hidden="true"></i>`;
    console.log(btnContent);
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
    });

    // Changing button icon matching theme
    themeCheck();
  });
}
themeToggle();

// Modal window for project information

function showModal() {
  const html = document.body.addEventListener("click", (e) => console.log(e));
  console.log(html);
}
showModal();
