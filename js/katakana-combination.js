// import KATAKANA_COMBINATION ARRAY
import { KATAKANA_COMBINATION } from "./storage.js";
const katakanaCombinationTBody = document.getElementById(
  "katakana-combination-tbody"
);

function getKatakanaCombination() {
  for (let i = 0; i < KATAKANA_COMBINATION.length; i++) {
    let child = document.createElement("tr");

    child.innerHTML = `
    <td>${KATAKANA_COMBINATION[i].japanese}</td>
    <td>${KATAKANA_COMBINATION[i].romaji}</td>
    `;

    katakanaCombinationTBody.appendChild(child);

    // console.log(KATAKANA_COMBINATION[i].japanese, KATAKANA_COMBINATION[i].romaji);
  }
}

getKatakanaCombination();
