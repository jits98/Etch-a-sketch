let numberOfDivs = 16;

const button = document.querySelector(".button");

function inputValue() {
  let promptValue;
  while (true) {
    promptValue = prompt(
      "How many divs do you want? Please enter a number between 1 and 100:",
      ""
    );

    if (promptValue === null) {
      alert("Input cancelled.");
      return null;
    }

    let num = Number(promptValue.trim());

    if (!isNaN(num) && num >= 1 && num <= 100) {
      num = numberOfDivs;
      return numberOfDivs;
    } else {
      alert("Invalid input. Please enter a number between 1 and 100");
    }
  }
}

button.addEventListener("click", inputValue);

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
