const mainPanels = document.querySelectorAll(".main-panel");
const ctaNavButton = document.querySelectorAll(".cta-nav-button");
const mobileNavButton = document.querySelectorAll(".mobile-cta-nav-button");

function displayPanel(panelIndex) {
  mainPanels.forEach((panel) => {
    panel.style.display = "none";
  });
  ctaNavButton.forEach((button) => {
    button.style.backgroundColor = "var(--button-background)";
    button.style.color = "var(--font-color)";
    button.style.border = "2px solid var(--font-color)";
  });
  mainPanels[panelIndex].style.display = "flex";
  ctaNavButton[panelIndex].style.backgroundColor = "var(--font-color)";
  ctaNavButton[panelIndex].style.color = "var(--button-background)";
  ctaNavButton[panelIndex].style.border = "2px solid var(--button-background)";

  // console.log(`displaying panel ${panelIndex}`);
}

displayPanel(0);

function displayMobile(panelIndex) {
  mainPanels.forEach((panel) => {
    panel.style.display = "none";
  });
  mobileNavButton.forEach((button) => {
    button.style.backgroundColor = "var(--button-background)";
    button.style.color = "var(--font-color)";
    button.style.border = "2px solid var(--font-color)";
  });
  mainPanels[panelIndex].style.display = "flex";
  mobileNavButton[panelIndex].style.backgroundColor = "var(--font-color)";
  mobileNavButton[panelIndex].style.color = "var(--button-background)";
  mobileNavButton[panelIndex].style.border =
    "2px solid var(--button-background)";

  // console.log(`displaying panel ${panelIndex}`);
}

displayMobile(0);
