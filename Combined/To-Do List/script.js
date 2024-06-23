function addTask() {
    var task = document.getElementById("input").value.trim();
    if (task === "") {
        return;
    }
    var myList = document.getElementById("list");

    var listItem = document.createElement("li");
    listItem.innerHTML = task;
    myList.appendChild(listItem);
    task.value = "";
}

function clearAll() {
    var myList = document.getElementById("list");
    myList.innerHTML = "";
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