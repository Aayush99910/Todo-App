let todosArray;
let todosArrayFromLocalStorage = JSON.parse(localStorage.getItem("myTodos"));

if (todosArrayFromLocalStorage) {
    todosArray = todosArrayFromLocalStorage;
}else {
    todosArray = [];
}

export const createTodo = (title, dueDate, priority) => {
    return {
        title,
        dueDate,
        priority
    }
}

export const saveTodo = (todo) => {
    todosArray.push(todo);
    localStorage.setItem("myTodos", JSON.stringify(todosArray));
}

export const renderTodos = () => {
    const body = document.querySelector(".main-body-todos");
    body.innerHTML = " ";
    
    if (todosArray.length === 0) {
        const div = document.createElement("div");
        div.classList.add("todo-container");
        div.style.alignItems = "center";
        const p = document.createElement("p");
        p.classList.add("todos");
        p.textContent = "There is currently no task added.";
        div.append(p);
        body.append(div);
    }

    for(let i = 0; i < todosArray.length; i++){
        const div = document.createElement("div");
        div.classList.add("todo-container");

        const title = document.createElement("p");
        title.classList.add("title");
        title.textContent = todosArray[i].title;

        const dueDate = document.createElement("p");
        dueDate.classList.add("dueDate");
        dueDate.textContent = todosArray[i].dueDate;

        const priority = document.createElement("p");
        priority.classList.add("priority");
        priority.textContent = todosArray[i].priority;

        div.append(title, dueDate, priority);
        body.append(div);
    }
}