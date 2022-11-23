let todosArray; // initailising the todosarray
let todosArrayFromLocalStorage = JSON.parse(localStorage.getItem("myTodos")); // getting todos from the localStorage

// if todos found in the localStorage we use that else 
// make a new empty array
if (todosArrayFromLocalStorage) {
    todosArray = todosArrayFromLocalStorage;
}else {
    todosArray = [];
}

// DOM element
const body = document.querySelector(".main-body-todos");

// factory function which makes todo 
export const createTodo = (title, dueDate, priority) => {
    return {
        title,
        dueDate,
        priority
    }
}

// this function pushes the object todo in the array 
// and then saves the todoArray in the localStorage 
export const saveTodo = (todo) => {
    todosArray.push(todo);
    localStorage.setItem("myTodos", JSON.stringify(todosArray));
}

// adds more functionality 
function moreFunctionality () {
    const todoContainer = document.querySelectorAll(".todo-container");
    todoContainer.forEach(function (eachtodoContainer) {
        eachtodoContainer.addEventListener('click', () => {
            const todoContainerBody = eachtodoContainer.querySelector(".todo-container-body");
            const todoContainerHeading = eachtodoContainer.querySelector(".todo-container-heading");
            todoContainerBody.classList.toggle("show-todo-container-body");
            
            const buttonContainer = todoContainerHeading.querySelector(".completed-delete-dropdown-container");
            const dropDownBtn = buttonContainer.querySelector(".dropdown-btn");
            dropDownBtn.classList.toggle("rotate");
        });
    });
}


// renders each todo
function render(eachtodo) {
    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo-container");

    const todoContainerHeading = document.createElement("div");
    todoContainerHeading.classList.add("todo-container-heading");

    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = eachtodo.title;

    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("completed-delete-dropdown-container");
    
    const completedBtn = document.createElement("button");
    completedBtn.classList.add("completed-btn");
    completedBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    
    const dropDown = document.createElement("button");
    dropDown.classList.add("dropdown-btn");
    dropDown.innerHTML = `<i class="fa-solid fa-angle-down"></i>`;
    
    buttonDiv.append(completedBtn, deleteBtn, dropDown);

    const todoContainerBody = document.createElement("div");
    todoContainerBody.classList.add("todo-container-body");
    todoContainerBody.innerHTML = `
        <p class="todo-body-title">Title: ${eachtodo.title}</p>
        <p class="todo-body-priority">Priority: ${eachtodo.priority}</p>
        <p class="todo-body-dueDate">DueDate: ${eachtodo.dueDate}</p>
        <p class="todo-body-description">Description: Go to temple at 5 pm.</p>
    `;

    if (eachtodo.priority.toLowerCase() == "low") {
        todoContainerHeading.classList.add("green");
    } else if (eachtodo.priority.toLowerCase() == "medium") {
        todoContainerHeading.classList.add("yellow");
    } else if (eachtodo.priority.toLowerCase() == "high") {
        todoContainerHeading.classList.add("red");
    }

    todoContainerHeading.append(title, buttonDiv);
    todoContainer.append(todoContainerHeading, todoContainerBody);
    body.append(todoContainer);
}

// renderTodo takes a argument
// renders according to the argument
// if choice is all renders all the todos
// if choice is today renders all the todos due today
function _renderTodos(choice) {
    const bodyHeading = document.getElementById("heading");
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

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const currentday= new Date().getDate(); 

    if (choice == "all") {
        bodyHeading.textContent = "Inbox";
        todosArray.forEach(function(eachtodo) {
            render(eachtodo);
        })
        moreFunctionality();
    }
    else if (choice == "today") {
        bodyHeading.textContent = "Today";
        const todayDay = `${currentYear}-${currentMonth}-${currentday}`;

        todosArray.forEach(function(eachtodo) {
            if (todayDay == eachtodo.dueDate) {
                render(eachtodo);
            }
        })
        moreFunctionality();
    }
    else if (choice == "upcoming") {
        bodyHeading.textContent = "Upcoming Tasks";

        todosArray.forEach(function(eachtodo) {
            let fulldate = eachtodo.dueDate.split("-");
            const [year, month, day] = fulldate;
            if (year > currentYear || month > currentMonth || day > currentday) {
                render(eachtodo);
            }
        });
        moreFunctionality();
    }
}


export const renderTodos = () => {
    _renderTodos("all");
}

export function renderTodayTodos() {
    _renderTodos("today");
}

export const renderUpcomingTodos = () => {
    _renderTodos("upcoming");
} 