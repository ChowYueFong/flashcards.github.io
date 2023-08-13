const ENDPOINT =
  "https://gist.githubusercontent.com/ChowYueFong/49649598c1a17cc9b35e3972e370f9eb/raw/607701d2162c224a4438f91236385cbedb86b673/japanese.json";

async function getJapanese() {
  try {
    const response = await fetch(ENDPOINT);
    const data = await response.json();

    // console.log(data);

    return data;
  } catch (error) {
    console.error(error);
  }
}

const dropdownButton = document.getElementById("selection-dropdown-button");
const arrowUpButton = document.getElementById("selection-up-button");
const selectionSection = document.querySelector(".selection");
const checkboxWrapper = document.querySelector(".checkbox-wrapper");

dropdownButton.addEventListener("click", () => {
  dropdownButton.style.display = "none";
  arrowUpButton.style.display = "block";

  // Selection
  selectionSection.style.borderRadius = "0";
  selectionSection.style.borderTopLeftRadius = "5px";
  selectionSection.style.borderTopRightRadius = "5px";

  // Checkbox wrapper
  checkboxWrapper.style.display = "block";
});

arrowUpButton.addEventListener("click", () => {
  checkboxWrapper.classList.add("checkbox-wrapper-disappear");

  setTimeout(() => {
    // Checkbox wrapper
    checkboxWrapper.style.display = "none";

    // Selection
    selectionSection.style.borderRadius = "5px";

    checkboxWrapper.classList.remove("checkbox-wrapper-disappear");
  }, 250);

  arrowUpButton.style.display = "none";
  dropdownButton.style.display = "block";
});

const hiraganaCheckbox = document.getElementById("hiragana");
const hiraCombCheckbox = document.getElementById("hiragana-combination");
const katakanaCheckbox = document.getElementById("katakana");
const kataCombCheckbox = document.getElementById("katakana-combination");
const flashcard = document.getElementById("display");
const romajiInput = document.getElementById("romaji");
const markButton = document.getElementById("mark-romaji");

let selection = [];

async function mainLogic() {
  const JAPANESE = await getJapanese();

  const HIRAGANA = JAPANESE.data[2].content;
  const KATAKANA = JAPANESE.data[3].content;
  const HIRAGANA_COMBINATION = JAPANESE.data[0].content;
  const KATAKANA_COMBINATION = JAPANESE.data[1].content;

  checkboxChecking(
    HIRAGANA,
    HIRAGANA_COMBINATION,
    KATAKANA,
    KATAKANA_COMBINATION
  );

  hiraganaCheckbox.addEventListener("change", () => {
    checkboxChecking(
      HIRAGANA,
      HIRAGANA_COMBINATION,
      KATAKANA,
      KATAKANA_COMBINATION
    );

    displayFlashcard(selection);
  });

  hiraCombCheckbox.addEventListener("change", () => {
    checkboxChecking(
      HIRAGANA,
      HIRAGANA_COMBINATION,
      KATAKANA,
      KATAKANA_COMBINATION
    );

    displayFlashcard(selection);
  });

  katakanaCheckbox.addEventListener("change", () => {
    checkboxChecking(
      HIRAGANA,
      HIRAGANA_COMBINATION,
      KATAKANA,
      KATAKANA_COMBINATION
    );

    displayFlashcard(selection);
  });

  kataCombCheckbox.addEventListener("change", () => {
    checkboxChecking(
      HIRAGANA,
      HIRAGANA_COMBINATION,
      KATAKANA,
      KATAKANA_COMBINATION
    );

    displayFlashcard(selection);
  });

  romajiInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      marking(selection);
    }
  });

  markButton.addEventListener("click", () => {
    marking(selection);
  });
}

mainLogic();

function checkboxChecking(
  HIRAGANA,
  HIRAGANA_COMBINATION,
  KATAKANA,
  KATAKANA_COMBINATION
) {
  selection = [];
  if (hiraganaCheckbox.checked) {
    selection.push(...HIRAGANA);

    flashcard.classList.remove("flashcard-small-font");

    // console.log(selection);
  }

  if (hiraCombCheckbox.checked) {
    selection.push(...HIRAGANA_COMBINATION);

    flashcard.classList.remove("flashcard-small-font");

    // console.log(selection);
  }

  if (katakanaCheckbox.checked) {
    selection.push(...KATAKANA);

    flashcard.classList.remove("flashcard-small-font");

    // console.log(selection);
  }

  if (kataCombCheckbox.checked) {
    selection.push(...KATAKANA_COMBINATION);

    flashcard.classList.remove("flashcard-small-font");

    // console.log(selection);
  }

  if (
    !hiraganaCheckbox.checked &&
    !hiraCombCheckbox.checked &&
    !katakanaCheckbox.checked &&
    !kataCombCheckbox.checked
  ) {
    flashcard.innerHTML = `Please check a checkbox`;
    flashcard.classList.add("flashcard-small-font");
  }
}

function displayFlashcard(selection) {
  if (selection.length <= 0) return;

  flashcard.innerHTML = `${
    selection[Math.floor(Math.random() * selection.length)].japanese
  }`;
}

function marking(selection) {
  let currentJapanese = "";

  if (flashcard.innerHTML === `Please check a checkbox`) return;

  currentJapanese = flashcard.innerHTML;

  console.log(currentJapanese);

  let currentRomaji = "";

  for (let i = 0; i < selection.length; i++) {
    if (currentJapanese === selection[i].japanese) {
      currentRomaji = selection[i].romaji;

      console.log(currentRomaji);
    }
  }

  if (currentRomaji === romajiInput.value) {
    console.log("You're correct");

    romajiInput.value = "";

    displayFlashcard(selection);
  } else {
    romajiInput.value = "";

    console.log("Try again");
  }
}
