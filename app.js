const sidebar = document.querySelector(".sidebar-container");
const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");

toggleBtn.addEventListener("click", function () {
    sidebar.classList.toggle("show")
});

closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show");
});
