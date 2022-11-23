import { createTodo, saveTodo, renderTodos, renderTodayTodos, renderUpcomingTodos } from "./Todo.js";
import "./styles/main.css";



// DOM elements
const modal = document.querySelector("#modal");
const addBtn = document.querySelector("#add-task-btn");
const cancelBtn = document.querySelector("#cancel");
const form = document.querySelector("form");
const inbox = document.querySelector("#inbox");
const today = document.querySelector("#today");
const upcomingTask = document.querySelector("#upcoming");

// event listener for add task btn
addBtn.addEventListener("click", () => {
    modal.showModal();
});


// event listener for cancel btn
cancelBtn.addEventListener("click", () => {
    modal.close();
});


// event listener for form
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const titleInput = document.querySelector("#title");
    const dueDateInput = document.querySelector("#dueDate");
    const priorityInput = document.querySelector("#priority");
        
    // if empty form is submitted user is alerted about it
    if (titleInput.value === "" || dueDateInput.value === "" || priorityInput.value ===  "") {
        alert("Please fill the form.");
        return; // skips the whole other code after this
    }

    // when submitted closes the modal and creates the todo by
    // calling the createTodo factory function which is 
    // imported from Todo.js
    // then calls saveTodo function which saves the todo
    // in the localStorage lastly it renders them
    modal.close();
    const todo = createTodo(titleInput.value, dueDateInput.value, priorityInput.value);
    saveTodo(todo);
    renderTodos();
});

// when today is clicked on the sidebar renderTodayTodos
// is called which renders all the todo duedated today
today.addEventListener("click", () => {
    renderTodayTodos();
});

// renders all the todos
inbox.addEventListener("click", () => {
    renderTodos();
});

// renders all the upcoming todos
upcomingTask.addEventListener("click", () => {
    renderUpcomingTodos();
});


// when the user logs in the pade we render the todos
renderTodos();


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