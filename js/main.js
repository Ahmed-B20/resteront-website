// start global
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
// end global

// start menu toggle
// menu.addEventListener("click", () => {
//   menu.classList.toggle("active");
//   navigation.classList.toggle("active");
// });

function closeToggle() {
  let menu = document.querySelector(".menu-toggle");
  let navigation = document.querySelector(".navigation");
  let header = document.querySelector("header");
  menu.classList.toggle("active");
  header.classList.add("sticky");
  navigation.classList.toggle("active");
}
// end menu toggle
