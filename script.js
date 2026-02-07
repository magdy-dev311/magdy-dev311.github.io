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
    document.getElementById("scroll-to-top").classList.add("show");
  } else {
    document.getElementById("scroll-to-top").classList.remove("show");
  }
};

document.getElementById("scroll-to-top").addEventListener("click", () => {
  window.scrollTo(0, 0);
});

const form = document.getElementById("form");
const scriptURL =
  "https://script.google.com/macros/s/AKfycbz4j9Z4BMYH8M9WetIuChHlAgWI8UujNSHmOVfeb165-ijJ6mZS1Gt1hdZ-SruekmP9RA/exec";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => alert("Thank you! Form is submitted"))
    .then(() => {
      window.location.reload();
    })

    .catch((error) => console.error("Error!", error.message));
});
