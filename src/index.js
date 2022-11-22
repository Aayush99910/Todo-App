import { createTodo, saveTodo, renderTodos, renderTodayTodos } from "./Todo.js";
import "./styles/main.css";

const Flow = (() => {
    const modal = document.querySelector("#modal");
    const addBtn = document.querySelector("#add-task-btn");
    const cancelBtn = document.querySelector("#cancel");
    const form = document.querySelector("form");
    const inbox = document.querySelector("#inbox");
    const today = document.querySelector("#today");

    addBtn.addEventListener("click", () => {
        modal.showModal();
    });

    cancelBtn.addEventListener("click", () => {
        modal.close();
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const titleInput = document.querySelector("#title");
        const dueDateInput = document.querySelector("#dueDate");
        const priorityInput = document.querySelector("#priority");
        
        if (titleInput.value === "" || dueDateInput.value === "" || priorityInput.value ===  "") {
            alert("Please fill the form.");
            return;
        }

        modal.close();
        const todo = createTodo(titleInput.value, dueDateInput.value, priorityInput.value);
        saveTodo(todo);
        renderTodos();
    });

    today.addEventListener("click", () => {
        renderTodayTodos();
    });

    inbox.addEventListener("click", () => {
        renderTodos();
    });

    renderTodos();
})();