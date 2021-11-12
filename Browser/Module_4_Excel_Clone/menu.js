let fontSizeInput = document.querySelector(".font_size_input");
let fontFamilyInput = document.querySelector(".font_family_input");
let boldIcon = document.querySelector(".fa-bold");
let underlineIcon = document.querySelector(".fa-underline");
let italicIcon = document.querySelector(".fa-italic");
let alignmentContainer = document.querySelector(".alignment_container");
let textColorHInput = document.querySelector(".text_color");
let textColorInput = document.querySelector(".fa-tint");
let backgroundHInput = document.querySelector(".background_color");
let backgroundInput = document.querySelector(".fa-fill-drip");

textColorInput.addEventListener("click", function(e) {
    // dom help hidden click trigger
    textColorHInput.click();
    // console.log("clicked");
})
textColorHInput.addEventListener("click", function(e) {
    let color = textColorHInput.value;
    // console.log("color: " + color);
    let address = addressInput.value;
    let ridcidObj = getRidCidFromAddress(address);
    let tobeChangedCell = document.querySelector
        (`.grid .cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
    // change fontSize property
    tobeChangedCell.style.color = color;
})

backgroundInput.addEventListener("click", function(e) {
    // dom help hidden click trigger
    backgroundHInput.click();
    // console.log("clicked");
})
backgroundHInput.addEventListener("click", function(e) {
    let color = backgroundHInput.value;
    // console.log("color: " + color);
    let address = addressInput.value;
    let ridcidObj = getRidCidFromAddress(address);
    let tobeChangedCell = document.querySelector
        (`.grid .cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
    // change fontSize property
    tobeChangedCell.style.backgroundColor = color;
})

// change
fontSizeInput.addEventListener("change", function () {
    let fontSize = fontSizeInput.value;
    let address = addressInput.value;;
    let ridcidObj = getRidCidFromAddress(address);
    let tobeChangedCell = document.querySelector
        (`.grid .cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
    // change fontSize property
    tobeChangedCell.style.fontSize = fontSize + "px";
})
// select -> fontFamily
fontFamilyInput.addEventListener("change", function () {
    let fontFamily = fontFamilyInput.value;
    let address = addressInput.value;;
    let ridcidObj = getRidCidFromAddress(address);
    let tobeChangedCell = document.querySelector
        (`.grid .cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
    // change fontSize property
    tobeChangedCell.style.fontFamily = fontFamily;
})

boldIcon.addEventListener("click", function(){
    // get address from UI
    let address = addressInput.value;
    let ridcidObj = getRidCidFromAddress(address);
    let tobeChangedCell = document.querySelector(`.grid .cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
    // change fontSize property
    tobeChangedCell.style.fontWeight = 'bold';
    // then change icon
    boldIcon.classList.add("selected");
})

underlineIcon.addEventListener("click", function(){
    // get address from UI
    let address = addressInput.value;
    let ridcidObj = getRidCidFromAddress(address);
    let tobeChangedCell = document.querySelector(`.grid .cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
    // change fontSize property
    tobeChangedCell.style.textDecoration = 'underline';
    // then change icon
    underlineIcon.classList.add("selected");
})

italicIcon.addEventListener("click", function(){
    // get address from UI
    let address = addressInput.value;
    let ridcidObj = getRidCidFromAddress(address);
    let tobeChangedCell = document.querySelector(`.grid .cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
    // change fontSize property
    tobeChangedCell.style.fontStyle = 'italic';
    // then change icon
    underlineIcon.classList.add("selected");
})

alignmentContainer.addEventListener("click", function(e) {
    console.log(e.target);
    if(e.target !== alignmentContainer) {
        let classesArr = e.target.classList;
        let hAlignment = classesArr[classesArr.length - 1];
        let address = addressInput.value;
        let ridcidObj = getRidCidFromAddress(address);
        let tobeChangedCell = document.querySelector(`.grid .cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`);
        // change fontSize property
        tobeChangedCell.style.textAlign = hAlignment;
    }
})