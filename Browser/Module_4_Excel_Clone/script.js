{/* <div class="cell">
        C
    </div> */}

// create cells
// let div = document.createElement("div");
// div.setAttribute("class", "cell");
// div.textContent = "A";
// let topRow = document
//     .querySelector(".top_row");
// topRow.appendChild(div)
// A-> Z
// Ascii -> A
// for loop for prinitng alphabets

let rows = 100;
let cols = 26;

// top rows
let topRow = document.querySelector(".top_row");
for (let i = 0; i < cols; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "cell");
    div.textContent = String.fromCharCode(65 + i);
    topRow.appendChild(div)
}

// left column
let leftCol = document.querySelector(".left_col");
for (let i = 1; i <= rows; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "cell");
    div.textContent = i;
    leftCol.appendChild(div)
}

// grid
// 2 d loop -> columns*rows
let grid = document.querySelector(".grid");
for (let i = 0; i < rows; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let j = 0; j < cols; j++) {
        let cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        // cell.textContent = i+","+j;
        cell.contentEditable = true;
        row.appendChild(cell);
    }
    grid.appendChild(row);
}