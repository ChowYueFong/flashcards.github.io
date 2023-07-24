// import HIRAGANA ARRAY
import { HIRAGANA } from "./storage.js";
const hiraganaTBody = document.getElementById("hiragana-tbody");

function getHiragana() {
  for (let i = 0; i < HIRAGANA.length; i++) {
    let child = document.createElement("tr");

    child.innerHTML = `
    <td>${HIRAGANA[i].japanese}</td>
    <td>${HIRAGANA[i].romaji}</td>
    `;

    hiraganaTBody.appendChild(child);

    // console.log(HIRAGANA[i].japanese, HIRAGANA[i].romaji);
  }
}

getHiragana();
