import { createTodo, saveTodo, renderTodos, renderTodayTodos } from "./Todo.js";
import "./styles/main.css";


// flow of the whole page
const Flow = (() => {
    // DOM elements
    const modal = document.querySelector("#modal");
    const addBtn = document.querySelector("#add-task-btn");
    const cancelBtn = document.querySelector("#cancel");
    const form = document.querySelector("form");
    const inbox = document.querySelector("#inbox");
    const today = document.querySelector("#today");


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

    // when the user logs in the pade we render the todos
    renderTodos();
})();