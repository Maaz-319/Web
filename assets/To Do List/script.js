function loadTasks() {
    if (localStorage.tasks) {
        var data = new Array();
        data = localStorage.tasks.split(",");
        var myList = document.getElementById("list");
        for (var i = 0; i < data.length; i++) {
            var listItem = document.createElement("li");
            listItem.innerHTML = data[i];
            myList.appendChild(listItem);
        }
    }
}

function addTask() {
    var input = document.getElementById("input");
    var task = input.value.trim();
    if (task === "") {
        return;
    }
    var myList = document.getElementById("list");

    var listItem = document.createElement("li");
    listItem.innerHTML = task;
    var data = localStorage.tasks ? localStorage.tasks.split(",") : [];
    data.push(task);
    localStorage.tasks = data.join(","); // Ensure data is stored as a string
    myList.appendChild(listItem);
    input.value = ""; // Clear the input field
}

function clearAll() {
    var myList = document.getElementById("list");
    myList.innerHTML = "";
    localStorage.tasks = ""; // Clear the localStorage.tasks
}

document.addEventListener('DOMContentLoaded', function () {
    var inputField = document.getElementById("input");

    inputField.addEventListener("keypress", function (event) {
        if (event.key === 'Enter') { // Check if the key pressed is the Enter key
            event.preventDefault(); // Prevent the default action to avoid submitting a form if it's part of one
            addTask(); // Call the addTask function
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener("keydown", function (event) {
        if (event.key === 'Delete') { // Check if the key pressed is the Delete key
            event.preventDefault(); // Prevent the default action
            clearAll(); // Call the clearAll function
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    loadTasks();
});