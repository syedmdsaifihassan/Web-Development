var uid = new ShortUniqueId();
// console.log(uid());
let input = document.querySelector('.task_input');
let mainContainer = document.querySelector('.main-container');
let colorContainer = document.querySelector(".color-group-container");
let lockContainer = document.querySelector(".lock");
let unlockContainer = document.querySelector(".unlock");
let addContainer = document.querySelector(".add");
let crossContainer = document.querySelector(".cross");

let colors = ['pink','blue','green','black'];
let defaultColor = 'black';
let cFilter = '';
let locked = false;
let deleteMode = false;

input.addEventListener('keydown', function(e){
    if(e.code== 'Enter' && input.value){
        console.log('task value', input.value);
        let id = uid();
        // createDiv(id, input.value);
        createTask(id, input.value, true);
        input.value = '';
    }
})

// function createDiv(id, task){
//     let taskContainer = document.createElement('div');
//     taskContainer.setAttribute('class', 'task-container');
//     mainContainer.appendChild(taskContainer);
//     taskContainer.innerHTML = `
//             <div class="task-header ${defColor}"></div>
//             <div class="task-main">
//                 <h3 class="task-id">#${id}</h3>
//                 <div class="task-text" contentEditable='true'>${task}</div>
//             </div>
//         `;
    
//     // addEventListener for color change
//     let taskHeader = taskContainer.querySelector('.task-header');
//     taskHeader.addEventListener('click', function () {
//         // class -> change
//         // get all the classes on the element
//         console.log(taskHeader.classList);
//         let cColor = taskHeader.classList[1];
//         console.log('cColor', cColor);
//         let idx = colors.indexOf(cColor);
//         let nextIdx = (idx+1)%4;
//         let nextColor = colors[nextIdx];
//         taskHeader.classList.remove(cColor);
//         taskHeader.classList.add(nextColor);
//     })
// }

// filtering 
/*function filter(color){
    let taskArr = document.getElementsByClassName('task-container');
    for(let i=0; i<taskArr.length; i++){
        let taskColor = taskArr[i].querySelector('.task-header').classList[1];
        if(color!=taskColor){
            taskArr[i].style.display = 'none';
        }else{
            taskArr[i].style.display = 'block';
        }
    }
}*/

// filtering
colorContainer.addEventListener("click", function (e) {
    let element = e.target;
    if (element != colorContainer) {
        let filteredCardColor = element.classList[1];
        filterCards(filteredCardColor);
    }
})

// add cross container delete tesk div
// addContainer.addEventListener("click", function(e){
//     let numberOfElements = document.querySelectorAll(".task-container");
//     for (let i = 0; i < numberOfElements.length; i++){
//         // numberOfElements[i].contentEditable = false;
//         // numberOfElements[i].remove();
//     }
//     // ui match
//     addContainer.classList.add("delete");
//     crossContainer.classList.remove("delete");
// })
// crossContainer.addEventListener("click", function(e){
//     let numberOfElements = document.querySelectorAll(".task-container");
//     for (let i = 0; i < numberOfElements.length; i++){
//         // numberOfElements[i].contentEditable = true;
//         numberOfElements[i].remove();
//         // numberOfElements[i].parentNode.removeChild(numberOfElements[i]);
//     }
//     // ui match
//     addContainer.classList.remove("delete");
//     crossContainer.classList.add("delete");
// })



// lock unlock container content editable false true
lockContainer.addEventListener("click", function(e){
    let numberOfElements = document.querySelectorAll(".task-main>div");
    for (let i = 0; i < numberOfElements.length; i++){
        numberOfElements[i].contentEditable = false;
    }
    // ui match
    lockContainer.classList.add("active");
    unlockContainer.classList.remove("active");
})
unlockContainer.addEventListener("click", function(e){
    let numberOfElements = document.querySelectorAll(".task-main>div");
    for (let i = 0; i < numberOfElements.length; i++){
        numberOfElements[i].contentEditable = true;
    }
    // ui match
    lockContainer.classList.remove("active");
    unlockContainer.classList.add("active");
})

crossContainer.addEventListener("click", function (e) {
    deleteMode = !deleteMode;
    if (deleteMode) {
        crossContainer.classList.add("active")
    } else {
        crossContainer.classList.remove("active")

    }
})

// helpers
function createTask(id, task, flag) {
    console.log("create task ran", id);
    // add to local storage
    let taskContainer = document.createElement("div");
    taskContainer.setAttribute('class', 'task-container');
    mainContainer.appendChild(taskContainer);
    taskContainer.innerHTML = `
        <div class = "task-header ${defaultColor}"></div>
        <div class = "task-main">
            <h3 class = "task-id">#${id}</h3>
            <div class = "text" contentEditable = "true">${task}</div>
        </div> 
    `;
    // add evenListener for color changes 
    let taskHeader = taskContainer.querySelector(".task-header");
    // color
    let nextColor;
    taskHeader.addEventListener('click', function() {
        // class -> change 
        // get all the classes on the element
        let cColor  = taskHeader.classList[1];

        let idx = colors.indexOf(cColor);
        let nextidx = (idx+1)%4;
        nextColor = colors[nextidx];
        taskHeader.classList.remove(cColor);
        taskHeader.classList.add(nextColor);
        //  id -> localstorage search -> tell -> color update 
        // console.log("parent", taskHeader.parentNode);

        // console.log("taskcontainer", taskHeader.parentNode.children[1]);
        let idWalaElem = taskHeader.parentNode.children[1].children[0];
        let id = idWalaElem.textContent;
        id = id.split("#")[1];
        // console.log("id", id);
        let taskString = localStorage.getItem("tasks");
        let taskArr = JSON.parse(taskString)
        // {id: "nDCn8Q", task: "ffdsjbdshf", color: "pink} , {}
        for (let i = 0; i < taskArr.length; i++) {
            if (taskArr[i].id == id) {
                taskArr[i].color = nextColor;
                break;
            }
        }
        localStorage.setItem("tasks", JSON.stringify(taskArr));
    })

    // delete
    taskContainer.addEventListener('click', function(e) {
        if(deleteMode == true) {
            // delete -> ui, storage
            // local storage -> remove
            taskContainer.remove();
        }
    })

    // local storage add
    if(flag == true){
        let taskString = localStorage.getItem('task');
        let taskArr = JSON.parse(taskString) || [];
        let taskObj = {
            id: id,
            task: task,
            color: defaultColor
        }
        taskArr.push(taskObj);
        localStorage.setItem('tasks', JSON.stringify(taskArr));
    }

}

// lock -> click -> con
// console.log(colorBtns);
// for (let i = 0; i < colorBtns.length; i++) {
//     colorBtns[i].addEventListener("click", function () {
//         let filteredCardColor = colorBtns[i].classList[1];
//         console.log(filteredCardColor);
//         filterCards(filteredCardColor);
//     })
// }
function filterCards(filterColor) {
    let allTaskCards =
        document.querySelectorAll(".task-container");
    if (cFilter != filterColor) {
        for (let i = 0; i < allTaskCards.length; i++) {
            // header color -> 
            let taskHeader = allTaskCards[i]
                .querySelector(".task-header");
            let taskColor = taskHeader.classList[1];
            if (taskColor == filterColor) {
                // show 
                allTaskCards[i].style.display = "block"
            } else {
                // hide 
                allTaskCards[i].style.display = "none"
            }
        }
        cFilter = filterColor;
    } else {
        cFilter = "";
        for (let i = 0; i < allTaskCards.length; i++) {
            allTaskCards[i].style.display = "block"
        }
    }
}

// check if any of the tasks are in local storage
// brings it to ui

(function(){
    // local storage
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for(let i = 0; i < tasks.length; i++){
        let { id, task, color } = tasks[i];
        createTask(id, task, false);
    }
    // get it to ui
})();

// localStorage.setItem("todo", "Hello again todo");
// localStorage.setItem("todo tomorrow", "Hello again");
// localStorage.setItem("todo yesterday", "Hello again");
// let length = localStorage.length;
// console.log("length", length);
// localStorage.removeItem("todo");
// localStorage.clear();
// let item = localStorage.getItem("todo");
// console.log("item", item);