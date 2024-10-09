const navTop = document.querySelector(".nav-top");
const header = document.querySelector("header");
const title = document.querySelector(".title");
const subTitle = document.querySelector(".sub-title");
const topLeft = document.querySelector(".top-left");
const topRight = document.querySelector(".top-right");

// window.onload = function () {
//   // Hapus fragmen URL
//   if (window.location.hash) {
//     history.replaceState(null, document.title, window.location.pathname);
//   }
//   window.scrollTo(0, 0);
// };
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 100);
});

window.addEventListener("load", function () {
  navTop.classList.toggle("navtopload");
  header.classList.toggle("headerload");
  title.classList.toggle("titleload");
  subTitle.classList.toggle("titleload");
});

const navbarLinks = document.querySelectorAll(".navlist a");

navbarLinks.forEach((navbarlink) => {
  navbarlink.addEventListener("click", function (event) {
    event.preventDefault();

    const target = document.querySelector(navbarlink.getAttribute("href"));

    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  });
});

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - sectionHeight / 2 && scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navbarLinks.forEach((navbarlink) => {
    navbarlink.classList.remove("active");

    if (navbarlink.getAttribute("href").slice(1) === currentSection) {
      navbarlink.classList.add("active");
    }
  });
});

function toggleElements() {
  // Periksa lebar layar saat ini
  const screenWidth = window.innerWidth;

  // Menentukan breakpoint untuk menjalankan toggleElements()
  const breakpoint = 576;

  if (screenWidth <= breakpoint) {
    if (topRight.style.opacity === "1" || topRight.style.opacity === "") {
      topRight.style.opacity = "0";
      topRight.style.display = "none";
      topLeft.style.opacity = "1";
      topLeft.style.display = "flex";
      topLeft.style.flex = "1";
      topLeft.style.justifyContent = "center";
    } else if (topLeft.style.opacity === "1") {
      topLeft.style.opacity = "0";
      topLeft.style.display = "none";
      topRight.style.opacity = "1";
      topRight.style.display = "flex";
      topRight.style.flex = "1";
      topRight.style.justifyContent = "center";
    }
  }
}

if (window.innerWidth <= 576) {
  toggleElements();
  setInterval(toggleElements, 3000);
}
