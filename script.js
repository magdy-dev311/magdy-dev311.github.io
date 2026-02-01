let themeBtns = document.querySelectorAll(".theme-btn");
let themeBtnsIcons = document.querySelectorAll(".theme-btn i");
console.log(themeBtnsIcons);

themeBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    document.body.classList.toggle("dark");
    themeBtnsIcons.forEach((icon) => {
      if (icon.classList.contains("bi-moon-fill")) {
        icon.classList.remove("bi-moon-fill");
        icon.classList.add("bi-sun-fill");
      } else {
        icon.classList.remove("bi-sun-fill");
        icon.classList.add("bi-moon-fill");
      }
    });
  });
});

window.onscroll = () => {
  let nav = document.getElementById("nav");
  if (this.scrollY >= 60) {
    nav.classList.add("nav-scroll");
  } else {
    nav.classList.remove("nav-scroll");
  }
};
