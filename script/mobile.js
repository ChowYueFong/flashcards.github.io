const hamburger = document.getElementById("hamburger-mobile");
const hamburgerSVG = document.querySelector("#hamburger-mobile svg");
const links = document.querySelector(".mobile-links");
const cross = document.getElementById("cross-mobile");
const crossSVG = document.querySelector("#cross-mobile svg");

hamburger.addEventListener("click", () => {
  links.style.display = "flex";

  hamburger.style.display = "none";

  cross.style.display = "flex";
});

cross.addEventListener("click", () => {
  links.style.display = "none";

  hamburger.style.display = "flex";

  cross.style.display = "none";
});
