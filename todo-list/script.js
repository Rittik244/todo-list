
function addTodo() {
    const input = document.getElementById("todoInput");
    const task = input.value.trim();

    if (task !== "") {
        const todoList = document.getElementById("todoList");
        const todoItem = document.createElement("div");
        todoItem.className = "todo-item";
        todoItem.innerHTML = `
                    <span>${task}</span>
                    <span>
                        <button class="edit-button" onclick="editTodo(this)"><i class="fa fa-edit" style="font-size:24px"></i></button>
                        <button class="delete-button" onclick="removeTodo(this)"><i class="fa fa-trash-o" style="font-size:24px"></i></button>
                    </span>
                    `;
        todoList.appendChild(todoItem);
        input.value = "";
    }
}

function removeTodo(button) {
    const todoItem = button.parentNode.parentNode;
    const todoList = document.getElementById("todoList");
    todoList.removeChild(todoItem);
}

function editTodo(button) {
    const todoItem = button.parentNode.parentNode;
    const taskText = todoItem.querySelector("span");
    const editedTask = prompt("Edit task:", taskText.textContent);

    if (editedTask !== null) {
        taskText.textContent = editedTask;
    }
}