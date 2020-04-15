var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var userInput;
var instruction = document.getElementById("instruction");

function addToList() {
    var id = 0;
    var li = document.createElement("li");
    var div = document.createElement("div");
    var button = document.createElement("button");
    var buttontext = document.createTextNode("delete");
    div.setAttribute("class", "liContainer");
    button.setAttribute("class", "buttonDelete");
    button.appendChild(buttontext);
    li.setAttribute("class", "list");
    li.append(userInput);
    ul.append(div);
    div.append(li);
    div.append(button);
    input.value = "";
    done();
    deleteItem(hideInstruction);
}

function done() {
    var x = 0;
    var liRemove = document.getElementsByClassName("list");
    for (x = 0; x < liRemove.length; x++) {
        liRemove[x].addEventListener("click", doneToggle)
    }
}

function doneToggle() {
    var liRemove = this;
    if (liRemove.classList.contains("done"))
        liRemove.classList.remove("done");
    else
        liRemove.classList.add("done");
}

function deleteItem(callback) {
    var i;
    var parentDiv = document.getElementsByClassName("buttonDelete");
    for (i = 0; i < parentDiv.length; i++) {
        parentDiv[i].addEventListener("click", function () {
            var parentDiv = this.parentNode;
            parentDiv.remove();
            callback();
        })
        callback();
    }
}

function addToListAfterClick() {
    userInput = input.value;
    if (userInput != "") {
        addToList();
    }
}

function addToListAfterPress(event) {
    userInput = input.value;
    if ((event.keyCode === 13) && (userInput != "")) {
        addToList();
    }
}

function hideInstruction() {
    var hide = document.getElementById("instruction");
    var list = document.getElementsByClassName("list");

    if (list.length >= 1)
        hide.style.display = "block";
    else
        hide.style.display = "none";
}

button.addEventListener("click", addToListAfterClick)
input.addEventListener("keypress", addToListAfterPress)

