// Sidebar
const sidebar = document.querySelector(".sidebar-container");
const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");

toggleBtn.addEventListener("click", function () {
    sidebar.classList.toggle("show")
});

closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show");
});

// Collabsable Nav
const collapseNav = document.querySelector(".collapse-nav");
const collapseBtn = document.querySelector(".collapse-btn");
const collapseCloseBtn = document.querySelector(".collapse-close-btn");

collapseBtn.addEventListener("click", function () {
    collapseNav.classList.toggle("show")
});

collapseCloseBtn.addEventListener("click", function () {
    collapseNav.classList.remove("show");
});

// Current Year
const currentYear = new Date().getFullYear();
document.getElementById('currentYearPlaceholder').textContent = currentYear;

// Hide navbar
let prevScrollpos = window.scrollY;
window.onscroll = function () {
    const currentScrollPos = window.scrollY;
    const navbar = document.querySelector(".header-container");

    if (prevScrollpos > currentScrollPos || currentScrollPos === 0) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-100px";
    }

    if (currentScrollPos === 0) {
        navbar.style.backgroundColor = "transparent";
    } else {
        navbar.style.backgroundColor = "black";
    }

    navbar.style.zIndex = "999";

    prevScrollpos = currentScrollPos;
}
