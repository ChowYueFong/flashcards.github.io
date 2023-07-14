// Fetch API
// const url = "https://japanese-alphabet.p.rapidapi.com/v1.0/language/all";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "af0c96f3efmshf24ac85eec6317ap1549f3jsnea31173eda07",
//     "X-RapidAPI-Host": "japanese-alphabet.p.rapidapi.com",
//   },
// };

// async function getAlphabets() {
//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// }
// End of API Fetching

// Importing Data
import { HIRAGANA } from "./storage.js";
import { KATAKANA } from "./storage.js";
import { BOTHALPHABETS } from "./storage.js";
// End of import

// Get users selection
const selectHiragana = document.getElementById("select-hiragana");
const selectKatakana = document.getElementById("select-katakana");

let isHiragana = true;
let isKatakana = true;
let selection = [];

selectHiragana.addEventListener("click", () => {
  if (isHiragana) {
    isHiragana = false;

    selectHiragana.style.backgroundColor = "rgb(220, 220, 220)";
    selectHiragana.style.color = "black";

    // console.log("isHiragana = false");

    getSelection();
  } else {
    isHiragana = true;

    selectHiragana.style.backgroundColor = "black";
    selectHiragana.style.color = "rgb(220, 220, 220)";

    // console.log("isHiragana = true");

    getSelection();
  }
});

selectKatakana.addEventListener("click", () => {
  if (isKatakana) {
    isKatakana = false;

    selectKatakana.style.backgroundColor = "rgb(220, 220, 220)";
    selectKatakana.style.color = "black";

    // console.log("isKatakana = false");

    getSelection();
  } else {
    isKatakana = true;

    selectKatakana.style.backgroundColor = "black";
    selectKatakana.style.color = "rgb(220, 220, 220)";

    // console.log("isKatakana = true");

    getSelection();
  }
});

function getSelection() {
  selection = [];
  if (isHiragana) {
    selection.push(...HIRAGANA);
  }

  if (isKatakana) {
    selection.push(...KATAKANA);
  }

  if (selection.length === 0) {
    selection.push(...HIRAGANA, ...KATAKANA);
  }

  console.log(selection);
}

getSelection();

const flashcard = document.getElementById("flashcard");
const romajiInput = document.getElementById("romaji");
const correctMark = document.getElementById("correct-mark");
const wrongMark = document.getElementById("wrong-mark");

function displayFlashcard(requirement) {
  flashcard.textContent =
    requirement[Math.floor(Math.random() * requirement.length)].japanese;
}

displayFlashcard(selection);

function findRomaji(requirement) {
  const currentAlphabet = flashcard.textContent;
  let currentRomaji = "";

  // console.log(currentAlphabet);

  for (let i = 0; i < requirement.length; i++) {
    if (currentAlphabet === requirement[i].japanese) {
      currentRomaji = requirement[i].romaji;

      // console.log(currentRomaji);

      return currentRomaji;
    } else {
      currentRomaji = 0;
    }
  }
}

function marking(requirement) {
  const currentRomaji = findRomaji(requirement);
  const currentInput = romajiInput.value.toLowerCase();

  // console.log(currentInput);

  // console.log(currentRomaji);

  if (currentRomaji) {
    if (currentInput === currentRomaji) {
      correctMark.classList.remove("hide-correct");
      romajiInput.value = "";
      setTimeout(() => {
        correctMark.classList.add("hide-correct");
        displayFlashcard(requirement);
      }, 250);
    } else {
      wrongMark.classList.remove("hide-wrong");
      romajiInput.value = "";
      setTimeout(() => {
        wrongMark.classList.add("hide-wrong");
      }, 250);
    }
  } else {
    console.log("Answer not found");
    displayFlashcard(requirement);
  }
}

romajiInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    marking(selection);
  }
});

const markRomajiButton = document.getElementById("mark-romaji-button");
markRomajiButton.addEventListener("click", () => {
  marking(selection);
});

// Settings
const openSettings = document.getElementById("open-settings");
const closeSettings = document.getElementById("close-settings");
const settingsPopup = document.getElementById("settings-popup");

openSettings.addEventListener("click", () => {
  settingsPopup.style.display = "flex";
});

closeSettings.addEventListener("click", () => {
  settingsPopup.style.display = "none";
});
