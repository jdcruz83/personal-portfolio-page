const sections = document.querySelectorAll(".section");
const sectionBtns = document.querySelectorAll(".controls");
const sectionBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

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
