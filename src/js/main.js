import '../scss/style.scss'

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("header-nav-toggle")
    .addEventListener("click", () => {
    document.querySelector(".header").classList.toggle("open");
  });
});
