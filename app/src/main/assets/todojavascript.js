function addToList() {
    var todoInput = document.getElementById("todo");
    var todoText = todoInput.value.trim();
    var errorContainer = document.getElementById("errorContainer");

    if (todoText === ""){
        errorContainer.textContent = "You must write somethig first!";
        errorContainer.style.color = "white";
        errorContainer.style.fontSize = "20px";
        return;
    }else{
        errorContainer.textContent = "";
    }

    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(todoText));
    ul.appendChild(li);

    todoInput = "";    
}

document.getElementById("addButton").addEventListener("click", addToList);

document.getElementById("deleteButton").addEventListener("click", function() {
    var checkboxes = document.querySelectorAll("#list input[type='checkbox']");
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checkbox.parentNode.remove();
        }
    });
});

document.getElementById("clearButton").addEventListener("click", function() {
        document.getElementById("todo").value = ' ';
});

document.body.addEventListener("click", function() {
    document.getElementById("todo").value = '';
    document.getElementById("todo").placeholder = "Your To-Do";
});