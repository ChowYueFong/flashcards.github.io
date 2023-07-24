// import HIRAGANA_COMBINATION ARRAY
import { HIRAGANA_COMBINATION } from "./storage.js";
const hiraganaCombinationTBody = document.getElementById(
  "hiragana-combination-tbody"
);

function getHiraganaCombination() {
  for (let i = 0; i < HIRAGANA_COMBINATION.length; i++) {
    let child = document.createElement("tr");

    child.innerHTML = `
    <td>${HIRAGANA_COMBINATION[i].japanese}</td>
    <td>${HIRAGANA_COMBINATION[i].romaji}</td>
    `;

    hiraganaCombinationTBody.appendChild(child);

    // console.log(HIRAGANA_COMBINATION[i].japanese, HIRAGANA_COMBINATION[i].romaji);
  }
}

getHiraganaCombination();
