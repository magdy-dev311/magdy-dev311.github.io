let themeBtns = document.querySelectorAll(".theme-btn");
let themeBtnsIcons = document.querySelectorAll(".theme-btn i");

if (window.localStorage.getItem("theme")) {
  if (window.localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeBtnsIcons.forEach((icon) => {
      icon.classList.remove("bi-moon-fill");
      icon.classList.add("bi-sun-fill");
    });
  }
}

themeBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    document.body.classList.toggle("dark");
    themeBtnsIcons.forEach((icon) => {
      if (icon.classList.contains("bi-moon-fill")) {
        icon.classList.remove("bi-moon-fill");
        icon.classList.add("bi-sun-fill");
        window.localStorage.setItem("theme", "dark");
      } else {
        icon.classList.remove("bi-sun-fill");
        icon.classList.add("bi-moon-fill");
        window.localStorage.setItem("theme", "light");
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

  if (this.scrollY >= 160) {
    document.getElementById("about").style.animation = "up 2s ease forwards";
    document.getElementById("scroll-to-top").classList.add("show");
  } else {
    document.getElementById("scroll-to-top").classList.remove("show");
  }

  console.log(this.scrollY);
};

document.getElementById("scroll-to-top").addEventListener("click", () => {
  window.scrollTo(0, 0);
});
