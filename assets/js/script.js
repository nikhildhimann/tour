'use strict';

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

function setMenuOpen(isOpen) {
  navToggleBtn.classList.toggle("active", isOpen);
  header.classList.toggle("active", isOpen);
  navToggleBtn.setAttribute("aria-expanded", String(isOpen));
  navToggleBtn.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  document.body.classList.toggle("nav-menu-open", isOpen);
}

navToggleBtn.addEventListener("click", function () {
  setMenuOpen(!header.classList.contains("active"));
});

mobileNavLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    setMenuOpen(false);
  });
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && header.classList.contains("active")) setMenuOpen(false);
});



/**
 * show go top btn when scroll window to 500px
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500 ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});
