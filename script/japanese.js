const ENDPOINT =
  "https://gist.githubusercontent.com/ChowYueFong/49649598c1a17cc9b35e3972e370f9eb/raw/607701d2162c224a4438f91236385cbedb86b673/japanese.json";

async function getJapanese() {
  try {
    const response = await fetch(ENDPOINT);
    const data = await response.json();

    //   console.log(data);

    return data;
  } catch (error) {
    console.error(error);
  }
}

const tableBody = document.querySelector("tbody");
const hiraganaInput = document.getElementById("hiragana");
const hiraganaCInput = document.getElementById("hiragana-combination");
const katakanaInput = document.getElementById("katakana");
const katakanaCInput = document.getElementById("katakana-combination");
const tableWrapper = document.getElementsByClassName("table-wrapper");
let checked = [];

// hiraganaInput.setAttribute("checked");
// katakanaInput.setAttribute("checked");

async function displayTable() {
  const JAPANESE = await getJapanese();
  const HIRAGANA_COMBINATION = JAPANESE.data[0].content;
  const KATAKANA_COMBINATION = JAPANESE.data[1].content;
  const HIRAGANA = JAPANESE.data[2].content;
  const KATAKANA = JAPANESE.data[3].content;

  checked = [];

  tableBody.innerHTML = ``;

  if (
    hiraganaInput.checked ||
    hiraganaCInput.checked ||
    katakanaInput.checked ||
    katakanaCInput.checked
  ) {
    if (hiraganaInput.checked) {
      // console.log("h checked");

      checked.push(...HIRAGANA);
    }

    if (hiraganaCInput.checked) {
      // console.log("hc checked");

      checked.push(...HIRAGANA_COMBINATION);
    }

    if (katakanaInput.checked) {
      // console.log("k checked");

      checked.push(...KATAKANA);
    }

    if (katakanaCInput.checked) {
      // console.log("kc checked");

      checked.push(...KATAKANA_COMBINATION);
    }

    console.log(checked);

    tableWrapper[0].innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Japanese</th>
          <th>Romaji</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>`;

    const tableBody = document.querySelector("tbody");

    for (let i = 0; i < checked.length; i++) {
      // console.log(checked[i].japanese);
      // console.log(checked[i].romaji);

      const tableRow = document.createElement("tr");

      tableRow.innerHTML = `
      <td>${checked[i].japanese}</td>
      <td>${checked[i].romaji}</td>
      `;

      tableBody.appendChild(tableRow);
    }
  } else if (
    !hiraganaInput.checked &&
    !hiraganaCInput.checked &&
    !katakanaInput.checked &&
    !katakanaCInput.checked
  ) {
    tableWrapper[0].innerHTML = `<div style="font-size: 20px">Please check a checkbox</div>`;
  }

  // console.log(checked);
}

displayTable();

hiraganaInput.addEventListener("change", () => {
  displayTable();
});

hiraganaCInput.addEventListener("change", () => {
  displayTable();
});

katakanaInput.addEventListener("change", () => {
  displayTable();
});

katakanaCInput.addEventListener("change", () => {
  displayTable();
});
