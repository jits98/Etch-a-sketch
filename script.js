const numberOfDivs = 16;

// const userInput = prompt(
//   "How many divs do you want but it shouldn't be more than 100?",
//   ""
// );
const parentContainer = document.querySelector(".parent-container");

function creatingRowDivs() {
  const row = document.createElement("div");
  row.classList.add("row");

  for (let i = 0; i < numberOfDivs; i++) {
    const column = document.createElement("div");
    column.classList.add("column");
    row.appendChild(column);
  }

  parentContainer.appendChild(row);
}

function creatingGrid() {
  for (let j = 0; j < numberOfDivs; j++) {
    creatingRowDivs();
  }
}

creatingGrid();
