const menuBtn = document.getElementById("menu__btn");
const navLinks = document.getElementById("nav__links");
const menuBtnIcon = menuBtn.querySelector("i");


menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
 const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});


ScrollReveal().reveal(".header__image img", {
  distance: "50px",
  origin: "right",
  duration: 1000,
});

ScrollReveal().reveal(".header__content h2", {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  delay: 500,
});

ScrollReveal().reveal(".header__content h1", {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  delay: 1000,
});

ScrollReveal().reveal(".header__content p", {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  delay: 1500,
});

ScrollReveal().reveal(".header__btn", {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  delay: 2000,
});

ScrollReveal().reveal(".socials", {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  delay: 2500,
});

ScrollReveal().reveal(".header__bar", {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  delay: 3000,
});
