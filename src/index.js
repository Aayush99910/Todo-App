/*eslint-disable */
// importing all the modules from other files
import {
  createTodo, 
  saveTodo, 
  renderTodos, 
  renderTodayTodos, 
  renderUpcomingTodos
} from './Todo.js';

import ProjectName from './project.js';

import { 
  saveProject, 
  renderSideBarProjects,
  renderProjects,
  saveTodoToProject
} from './project.js';

import './styles/main.css';

// DOM elements
const modal = document.querySelector('#modal');
const projectModal = document.querySelector("#project-modal");
const addTaskBtn = document.querySelector('#add-task-btn');
const cancelTaskBtn = document.querySelector('#cancel-task');
const formTask = document.querySelector('#add-task-form');
const inbox = document.querySelector('#inbox');
const today = document.querySelector('#today');
const upcomingTask = document.querySelector('#upcoming');
const projects = document.querySelector("#projects");
const addProjectBtn = document.querySelector('#add-project-btn');
const formProject = document.querySelector("#project-form");
const cancelProjectBtn = document.querySelector("#cancel-project-btn");

// event listener for add task btn
addTaskBtn.addEventListener('click', () => {
  modal.showModal();
});

// event listener for cancel btn
cancelTaskBtn.addEventListener('click', () => {
  modal.close();
});

// event listener for form
formTask.addEventListener('submit', (e) => {
  e.preventDefault(); // preventing the default 
  // getting all the input values from the form
  const heading = document.querySelector('#heading');
  const titleInput = document.querySelector('#title');
  const dueDateInput = document.querySelector('#dueDate');
  const priorityInput = document.querySelector('#priority');
  const descriptionInput = document.querySelector("#description");

  // if empty form is submitted user is alerted about it
  if (titleInput.value === '' || dueDateInput.value === '' || priorityInput.value === '' || descriptionInput.value === '') {
    /*eslint-disable */
    alert('Please fill the form.'); 
    return; // skips the whole other code after this
  }

  // when submitted closes the modal and creates the todo by
  // calling the createTodo factory function which is
  // imported from Todo.js
  // then calls saveTodo function which saves the todo
  // in the localStorage lastly it renders them
  modal.close();
  const headingContent = heading.textContent.toLowerCase();
  if (headingContent === "inbox" 
    || headingContent === "today" 
    || headingContent === "upcoming tasks") {
      const todo = createTodo(titleInput.value, dueDateInput.value, priorityInput.value, descriptionInput.value, false);
      saveTodo(todo);
  }
  if (headingContent === "inbox") {
    renderTodos();
    return;
  } else if (headingContent === "today") {
    renderTodayTodos();
    return;
  } else if (headingContent === "upcoming tasks") {
    renderUpcomingTodos();
    return;
  }
  
  saveTodoToProject(headingContent, titleInput.value, dueDateInput.value, priorityInput.value, descriptionInput.value);
});

// when today is clicked on the sidebar renderTodayTodos
// is called (which renders all the todo duedated today)
today.addEventListener('click', () => {
  renderTodayTodos(); // renders all the todos duedates today
});

// renders all the todos
inbox.addEventListener('click', () => {
  renderTodos();
});

// renders all the upcoming todos
upcomingTask.addEventListener('click', () => {
  renderUpcomingTodos();
});

// event listener for project 
projects.addEventListener("click", () => {
  renderProjects();
});

addProjectBtn.addEventListener("click", () => {
  projectModal.showModal();
});

// event listener for cancel btn
cancelProjectBtn.addEventListener('click', () => {
  projectModal.close();
});

// form for projects
formProject.addEventListener('submit', (e) => {
  e.preventDefault();

  const projectName = document.querySelector("#project-name");

  if (projectName.value === "") {
    alert("Please fill in the form.");
    return;
  } else if (projectName.value.length > 20) {
    alert("Please give a shorter name.");
    return;
  }

  projectModal.close();
  const emptyArray = [];
  const project = new ProjectName(projectName.value, emptyArray);
  saveProject(project);
  renderSideBarProjects();
  renderProjects();
});

// when the user logs in the pade we render the todos
renderTodos();
renderSideBarProjects();