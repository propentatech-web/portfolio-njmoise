const menu = document.querySelector(".menuburger");
const navlinks = document.querySelector(".navbar");
menu.addEventListener("click", () => {
  navlinks.classList.toggle("mobilemenu");
});
const entrer = document.querySelector(".entrer");
const sorti = document.querySelector(".sorti");
const menuburger = document.querySelector(".menuburger");
menuburger.addEventListener("click", () => {
  sorti.classList.toggle("none");
  entrer.classList.toggle("none");
});
