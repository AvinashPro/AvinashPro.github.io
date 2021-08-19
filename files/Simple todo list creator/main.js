const date = () => {
    const date = new Date();
    const month = ["January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"];
    document.querySelector("#date").innerHTML = `${date.getDate()} ${month[date.getMonth()]}, ${date.getFullYear()}`;
}
date()


const addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click", () => {
    const input = document.querySelector("#input");
    const todo = localStorage.getItem("todo");

    if (todo == null) {
        todoArray = [];
    } else {
        todoArray = JSON.parse(todo);
    }

    todoArray.push(`<pre>${input.value}</pre>`);
    localStorage.setItem("todo", JSON.stringify(todoArray));
    showTodo()

    input.value = "";
})


const showTodo = () => {
    const todo = localStorage.getItem("todo");

    if (todo == null) {
        todoArray = [];
    } else {
        todoArray = JSON.parse(todo);
    }

    let html = "";
    todoArray.forEach((task, index) => {
        html += `<div class="todo">
        <input type="checkbox" id="${index}"/>
        <label for="${index}">${task}</label>
        <button class="delete"><i class="far fa-trash-alt"></i></button>
        </div>`;
    })
    const todoSection = document.querySelector(".todoSection");
    todoSection.innerHTML = html;

    if (todoSection.innerHTML == "") {
        const message = `<div class="msg">Add some todos to see here...</div>`;
        todoSection.innerHTML = message;
    }
    deleteTodo()
}
showTodo()

// Delete todo function
function deleteTodo() {
    const deleteBtn = document.querySelectorAll(".delete");
    deleteBtn.forEach((button, index) => {
        button.addEventListener("click", () => {
            let todo = localStorage.getItem("todo");
            if (todo == null) {
                array = [];
            } else {
                array = JSON.parse(todo);
            }

            let checkbox = document.querySelectorAll("input[type=checkbox]");
            let confirmed = false;

            checkbox[index].checked ? confirmed = true: confirmed = false;

            if (confirmed) {
                array.splice(index, 1);
                localStorage.setItem("todo", JSON.stringify(array));
                showTodo()
            }
        })
    })
}
