const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask(){
    if (inputBox.value === "") {
        alert("Add a Todo")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""
    saveData();
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

function changeTheme(){
    var htmlElement = document.querySelector('html');
    var currentTheme = htmlElement.getAttribute('data-theme');

    if (currentTheme === 'light') {
      htmlElement.setAttribute('data-theme', 'dark');
    } else {
      htmlElement.setAttribute('data-theme', 'light');
    }
}

showTask()