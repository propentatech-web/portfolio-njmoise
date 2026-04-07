// pour ouvrir et fermer la sidebar sur mobile

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
// pour un evenement de song sur les bouton mais sa n'a pas marche
// const btns = document.querySelectorAll("button");
// function ring(nomfichier) {
//   audio = new Audio();
//   // audio.src = "../song/" + nomfichier + ".mp3";
//   audio.src = "../song/songclick.mp3";
//   audio.currentTime = 0;
//   auto.play();
// }
// btns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     ring("songclick");
//   });
// });
// pour faire apparaitre progresivement le text de description
let selection = Splitting();
gsap.registerPlugin(ScrollTrigger);

gsap.from(selection[0].chars, {
  x: 100,
  // scaleX: 1.4,
  // y: 50,

  rotation: 180,
  color: "rgb(13,13,13)",
  stagger: 0.1,
  opacity: 0,
  ease: "power3.out",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".text-reveal",
    start: "top 70%",
    end: "top 30%",
    // markers: true,
    scrub: true,
  },
});
// effet de smooth  ,le smooth ne fonctione pas
const lenis = new Lenis();
console.log(lenis);

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 600);
});

gsap.ticker.lagSmoothing(0);

// reveler le titre

// gsap.from(title[0].chars, {
//   opacity: 0,
//   color: rgb(14, 224, 109),
//   x: 50,
//   stagget: 0.1,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".title-reveal",
//     start: "top 70%",
//     end: "top 30%",
//     markers: true,
//     // scrub: true,
//   },
// });
