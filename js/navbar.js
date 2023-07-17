const mainPanels = document.querySelectorAll(".main-panel");
const ctaNavButton = document.querySelectorAll(".cta-nav-button");

function displayPanel(panelIndex) {
  mainPanels.forEach((panel) => {
    panel.style.display = "none";
  });
  ctaNavButton.forEach((button) => {
    button.style.backgroundColor = "rgb(220, 220, 220)";
    button.style.color = "black";
  });
  mainPanels[panelIndex].style.display = "flex";
  ctaNavButton[panelIndex].style.backgroundColor = "black";
  ctaNavButton[panelIndex].style.color = "rgb(220, 220, 220)";

  // console.log(`displaying panel ${panelIndex}`);
}

displayPanel(0);
