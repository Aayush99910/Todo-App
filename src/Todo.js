let todosArray;
let todosArrayFromLocalStorage = JSON.parse(localStorage.getItem("myTodos"));

if (todosArrayFromLocalStorage) {
    todosArray = todosArrayFromLocalStorage;
}else {
    todosArray = [];
}


const body = document.querySelector(".main-body-todos");
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

function render(i) {
    const div = document.createElement("div");
    div.classList.add("todo-container");

    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = todosArray[i].title;

    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("completed-delete-dropdown-container");
    
    const completedBtn = document.createElement("button");
    completedBtn.classList.add("completed-btn");
    completedBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    
    // const dropDown = document.createElement("button");
    // dropDown.classList.add("dropdown-btn");
    // dropDown.innerHTML = `<i class="fa-solid fa-angle-down"></i>`;
    
    buttonDiv.append(completedBtn, deleteBtn);

    if (todosArray[i].priority.toLowerCase() == "low") {
        div.classList.add("green");
    } else if (todosArray[i].priority.toLowerCase() == "medium") {
        div.classList.add("yellow");
    } else if (todosArray[i].priority.toLowerCase() == "high") {
        div.classList.add("red");
    }

    div.append(title, buttonDiv);
    body.append(div);
}

function _renderTodos(choice) {
    body.innerHTML = " ";
    if (todosArray.length === 0) {
        const div = document.createElement("div");
        div.classList.add("todo-container");
        div.style.justifyContent = "center";
        const p = document.createElement("p");
        p.classList.add("empty-todos");
        p.textContent = "There is currently no task added.";
        div.append(p);
        body.append(div);
    }

    if (choice == "all") {
        for(let i = 0; i < todosArray.length; i++){
            render(i);
        }
    } else if (choice == "today") {
        const year = new Date().getFullYear();
        const month = new Date().getMonth() + 1;
        const day = new Date().getDate(); 
        const todayDay = `${year}-${month}-${day}`;

        for(let i = 0; i < todosArray.length; i++){
            if (todayDay == todosArray[i].dueDate) {
                render(i);
            }
        }
    }
}

export const renderTodos = () => {
    _renderTodos("all");
}

export function renderTodayTodos() {
    _renderTodos("today");
}