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

const mm = gsap.matchMedia();
mm.add("(min-width:600px)", () => {
  gsap.from(" .ligne1 ", {
    scrollTrigger: {
      trigger: ".mescompetence ",
      toggleAction: "restart none none reset",
      // markers: true,
      start: "top 60%",
      end: "bottom 60%",
      scrub: 1,
    },
    y: 100,
    opacity: 0,
    scale: 0,
    ease: "elastic.out(0.4,0.15)",
    duration: 1.5,
    stagger: 0.3,
  });
  gsap.from(".ligne2", {
    scrollTrigger: {
      trigger: ".mescompetence ",
      toggleAction: "restart none none reset",
      // markers: true,
      start: "top 60%",
      end: "bottom 60%",
      scrub: 1,
    },
    y: 100,
    opacity: 0,
    scale: 0,
    ease: "elastic.out(0.4,0.15)",
    duration: 1.5,
    stagger: 0.1,
  });
});

let selection = Splitting();
gsap.registerPlugin(ScrollTrigger);

gsap.from(selection[0].chars, {
  x: 40,
  // scaleX: 1.4,
  // y: 50,

  rotation: 180,
  color: "rgb(13,13,13)",
  stagger: 1,
  opacity: 0,
  ease: "power3.out",
  duration: 1,
  scrollTrigger: {
    trigger: ".text-reveal",
    start: "top 70%",
    end: "top 30%",
    // markers: true,
    scrub: 3,
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
// faire apparaitre progressivement mes competences

const linkmenu = document.querySelectorAll(".linkmenu");
linkmenu.forEach((element) => {
  element.addEventListener("click", () => {
    navlinks.classList.toggle("mobilemenu");
    sorti.classList.toggle("none");
    entrer.classList.toggle("none");
  });
});

const text = "Je Suis Developper Front-End";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.querySelector(".title-reveal").textContent += text[i];
    i++;
    setTimeout(typeWriter, 150);
  }
}
typeWriter();
