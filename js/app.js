const sections = document.querySelectorAll(".section");
const sectionBtns = document.querySelectorAll(".controls");
const sectionBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageTransition() {
  console.log(sectionBtn);
  // Activate button on click
  // for (let i = 0; i < sectionBtn.length; i++) {
  //   sectionBtn[i].addEventListener("click", function () {
  //     const activeBtn = document.querySelectorAll(".active-btn");
  //     console.log(activeBtn);
  //     activeBtn[0].classList.toggle("active-btn");
  //     this.className += " active-btn";
  //   });
  // }
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

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}

PageTransition();
