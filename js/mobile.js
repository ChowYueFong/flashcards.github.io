const hamburgerButton = document.getElementById("hamburger");
const navBarDropdown = document.getElementById("nav-bar-dropdown");
navBarDropdown.setAttribute("style", "display: none");

hamburgerButton.addEventListener("click", () => {
  if (navBarDropdown.style.display === "none") {
    navBarDropdown.style.display = "flex";
    hamburgerButton.style.backgroundColor = "var(--button-background)";
    hamburgerButton.style.boxShadow = "0 10px var(--button-background)";
  } else {
    navBarDropdown.style.display = "none";
    hamburgerButton.style.backgroundColor = "transparent";
    hamburgerButton.style.boxShadow = "0 0";
  }
});

function closeDropdown() {
  navBarDropdown.style.display = "none";
  hamburgerButton.style.backgroundColor = "transparent";
  hamburgerButton.style.boxShadow = "0 0";
}
