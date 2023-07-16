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
import { HIRAGANA_COMBINATION } from "./storage.js";
import { KATAKANA_COMBINATION } from "./storage.js";
import { HIRAGANA } from "./storage.js";
import { KATAKANA } from "./storage.js";
// End of import

// Get users selection
const selectHiraganaCombination = document.getElementById(
  "select-hiragana-combination"
);
const selectKatakanaCombination = document.getElementById(
  "select-katakana-combination"
);
const selectHiragana = document.getElementById("select-hiragana");
const selectKatakana = document.getElementById("select-katakana");

let isHiragana = true;
let isKatakana = true;
let isHiraganaCombination = false;
let isKatakanaCombination = false;
let selection = [];

selectHiragana.addEventListener("click", () => {
  if (isHiragana) {
    isHiragana = false;

    selectHiragana.style.backgroundColor = "rgb(220, 220, 220)";
    selectHiragana.style.color = "black";

    // console.log("isHiragana = false");

    getSelection();
    displayFlashcard(selection);
  } else {
    isHiragana = true;

    selectHiragana.style.backgroundColor = "black";
    selectHiragana.style.color = "rgb(220, 220, 220)";

    // console.log("isHiragana = true");

    getSelection();
    displayFlashcard(selection);
  }
});

selectKatakana.addEventListener("click", () => {
  if (isKatakana) {
    isKatakana = false;

    selectKatakana.style.backgroundColor = "rgb(220, 220, 220)";
    selectKatakana.style.color = "black";

    // console.log("isKatakana = false");

    getSelection();
    displayFlashcard(selection);
  } else {
    isKatakana = true;

    selectKatakana.style.backgroundColor = "black";
    selectKatakana.style.color = "rgb(220, 220, 220)";

    // console.log("isKatakana = true");

    getSelection();
    displayFlashcard(selection);
  }
});

selectHiraganaCombination.addEventListener("click", () => {
  if (isHiraganaCombination) {
    isHiraganaCombination = false;

    selectHiraganaCombination.style.backgroundColor = "rgb(220, 220, 220)";
    selectHiraganaCombination.style.color = "black";

    // console.log("isHiraganaCombination = false");

    getSelection();
    displayFlashcard(selection);
  } else {
    isHiraganaCombination = true;

    selectHiraganaCombination.style.backgroundColor = "black";
    selectHiraganaCombination.style.color = "rgb(220, 220, 220)";

    // console.log("isHiraganaCombination = true");

    getSelection();
    displayFlashcard(selection);
  }
});

selectKatakanaCombination.addEventListener("click", () => {
  if (isKatakanaCombination) {
    isKatakanaCombination = false;

    selectKatakanaCombination.style.backgroundColor = "rgb(220, 220, 220)";
    selectKatakanaCombination.style.color = "black";

    // console.log("isKatakanaCombination = false");

    getSelection();
    displayFlashcard(selection);
  } else {
    isKatakanaCombination = true;

    selectKatakanaCombination.style.backgroundColor = "black";
    selectKatakanaCombination.style.color = "rgb(220, 220, 220)";

    // console.log("isKatakanaCombination = true");

    getSelection();
    displayFlashcard(selection);
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

  if (isHiraganaCombination) {
    selection.push(...HIRAGANA_COMBINATION);
  }

  if (isKatakanaCombination) {
    selection.push(...KATAKANA_COMBINATION);
  }

  if (selection.length === 0) {
    selection.push(...HIRAGANA, ...KATAKANA);
  }

  // console.log(selection);
}

getSelection();

const flashcard = document.getElementById("flashcard");
const romajiInput = document.getElementById("romaji");
const correctMark = document.getElementById("correct-mark");
const wrongMark = document.getElementById("wrong-mark");

function displayFlashcard(selection) {
  flashcard.textContent =
    selection[Math.floor(Math.random() * selection.length)].japanese;
}

displayFlashcard(selection);

function findRomaji(selection) {
  const currentAlphabet = flashcard.textContent;
  let currentRomaji = "";

  // console.log(currentAlphabet);

  for (let i = 0; i < selection.length; i++) {
    if (currentAlphabet === selection[i].japanese) {
      currentRomaji = selection[i].romaji;

      // console.log(currentRomaji);

      return currentRomaji;
    } else {
      currentRomaji = 0;
    }
  }
}

function marking(selection) {
  const currentRomaji = findRomaji(selection);
  const currentInput = romajiInput.value.toLowerCase();

  // console.log(currentInput);

  // console.log(currentRomaji);

  if (currentRomaji) {
    if (currentInput === currentRomaji) {
      correctMark.classList.remove("hide-correct");
      romajiInput.value = "";
      setTimeout(() => {
        correctMark.classList.add("hide-correct");
        displayFlashcard(selection);
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
    displayFlashcard(selection);
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

// // Hiragana & Katakana examples

// function getExamples(selection) {
//   for (const alphabets of selection) {
//     for (const examples of alphabets.examples) {
//       if (examples.japanese) {
//         console.log(examples);
//       }
//     }
//   }
// }

// getExamples(selection);
