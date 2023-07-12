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

const flashcard = document.getElementById("flashcard");
const romajiInput = document.getElementById("romaji");
const correctMark = document.getElementById("correct-mark");
const wrongMark = document.getElementById("wrong-mark");

function displayFlashcard() {
  flashcard.textContent =
    BOTHALPHABETS[Math.floor(Math.random() * BOTHALPHABETS.length)].japanese;
  return flashcard.textContent;
}

displayFlashcard();

function findRomaji() {
  const currentAlphabet = flashcard.textContent;
  let currentRomaji = "";

  // console.log(currentAlphabet);

  for (let i = 0; i < BOTHALPHABETS.length; i++) {
    if (currentAlphabet === BOTHALPHABETS[i].japanese) {
      currentRomaji = BOTHALPHABETS[i].romaji;

      // console.log(currentRomaji);

      return currentRomaji;
    } else {
      currentRomaji = 0;
    }
  }
}

function marking() {
  const currentRomaji = findRomaji();

  // console.log(currentRomaji);

  if (currentRomaji) {
    if (romajiInput.value === currentRomaji) {
      correctMark.classList.remove("hide-correct");
      romajiInput.value = "";
      setTimeout(() => {
        correctMark.classList.add("hide-correct");
        displayFlashcard();
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
    displayFlashcard();
  }
}

romajiInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    marking();
  }
});

const markRomajiButton = document.getElementById("mark-romaji-button");
markRomajiButton.addEventListener("click", () => {
  marking();
});
