// import KATAKANA ARRAY
import { KATAKANA } from "./storage.js";
const katakanaTBody = document.getElementById("katakana-tbody");

function getKatakana() {
  for (let i = 0; i < KATAKANA.length; i++) {
    let child = document.createElement("tr");

    child.innerHTML = `
    <td>${KATAKANA[i].japanese}</td>
    <td>${KATAKANA[i].romaji}</td>
    `;

    katakanaTBody.appendChild(child);

    // console.log(KATAKANA[i].japanese, KATAKANA[i].romaji);
  }
}

getKatakana();
