const navToggle = document.getElementById("navToggle");
const headerNav = document.getElementById("headerNav");

navToggle.addEventListener("click", () => {
  headerNav.classList.toggle("hidden");
});
