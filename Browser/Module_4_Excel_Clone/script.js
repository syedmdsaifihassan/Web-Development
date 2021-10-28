let rows = 100;
let cols = 26;

// creating top rows cells
let topRow = document.querySelector(".top_row");
for (let i = 0; i < cols; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "cell");
    div.textContent = String.fromCharCode(65 + i);
    topRow.appendChild(div)
}

// creating left column cells
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
        cell.setAttribute("rId", i);
        cell.setAttribute("cId", j);
        // cell.textContent = i+","+j;
        cell.contentEditable = true;
        row.appendChild(cell);
    }
    grid.appendChild(row);
}

// if i click any of the cells
let allGridCells = document.querySelectorAll(".grid .cell");
let addressInput = document.querySelector(".address_input");
for (let i = 0; i < allGridCells.length; i++) {
    allGridCells[i].addEventListener("click", function (e) {

        let prevAddress = addressInput.value;
        if (prevAddress != "") {
            let ridcidObj = getRidCidFromAddress(prevAddress);
            // alert(ridcidObj.rid +""+ ridcidObj.cid);
            // prev -> remove -> border
            let prevCell = document.querySelector(`.grid .cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
            prevCell.style.border ="0.5px solid gray";
            // prevCell.style.borderRight="none";
            // prevCell.style.borderTop="none";
        }
        // alert("cell is clicked");
        // then i will get the address of that particular cell
        let rid = allGridCells[i].getAttribute("rId");
        let cid = allGridCells[i].getAttribute("cId");
        // get -> always in
        rid = Number(rid);
        cid = Number(cid);
        // alert(rid+1+" "+String.fromCharCode(65+cid));
        addressInput.value = String.fromCharCode(65+cid)+(rid+1);
        // cell styling bhi change
        let cCell = allGridCells[i];
        cCell.style.border = "2px solid #1B9CFC";
    })
}

// get first element (default)
let firstCell = document.querySelector(".grid .cell[rId='0'][cId='0']");
firstCell.click();
firstCell.focus();

function getRidCidFromAddress(address) {
    // A-Z, 1-100
    // B
    let AsciiValue = address.charCodeAt(0);
    let cid = AsciiValue - 65;
    let rid = Number(address.substring(1)) - 1;
    return {
        rid: rid, cid: cid
    }
}