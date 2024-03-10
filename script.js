// Toggel class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika Listnya Di klik
document.querySelector("#list").onclick = () => {
  navbarNav.classList.toggle("active");
};
// ketika klik diluar nav
const list = document.querySelector("#list");

document.addEventListener("click", function (e) {
  if (!list.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
