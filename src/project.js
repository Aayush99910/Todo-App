/* eslint-disable */
import { createTodo, _render } from './Todo.js';
let myProjects; // initialising the array 

// getting array from the localStorage
const myProjectsFromLocalStorage = JSON.parse(localStorage.getItem('myProjects'));

// if there is array stored in the localStorage
// use it otherwise an empty array is assigned
if (myProjectsFromLocalStorage) {
  myProjects = myProjectsFromLocalStorage;
} else {
  myProjects = [];
}

// DOM elements
const projectsContainer = document.querySelector('.projects-container');
const body = document.querySelector('.main-body-todos')

// class which return object of project and array 
export default class ProjectName {
  constructor(name, array) {
    this.name = name;
    this.array = array;
  }
}

// saves project to localStorage
function _saveProjectsToLocalStorage() {
  localStorage.setItem('myProjects', JSON.stringify(myProjects));
}

// saves project to the array and saves project to localStorage
export function saveProject(project) {
  myProjects.push(project);
  _saveProjectsToLocalStorage();
}

// saves eachtodo in the array of each project
export function saveTodoToProject(headingContent, titleValue, dueDateValue, priorityValue, descriptionValue) {
  myProjects.forEach(project => {
    if (project.name.toLowerCase() === headingContent) {
      const todo = createTodo(titleValue, dueDateValue, priorityValue, descriptionValue, false);
      project.array.push(todo);
      _saveProjectsToLocalStorage();
      _renderTodoOfParticularProject(project.name);
      _addFunctionality();
    }
  });
}

// renders the todos of a particular project
// it takes in the project title
function _renderTodoOfParticularProject(titleOfProject) {
  myProjects.forEach(project => {
    if (titleOfProject === project.name) {
      const bodyHeading = document.getElementById('heading');
      body.innerHTML = ' ';

      const button = document.querySelector('.add-btn-container');
      button.style.display = "flex";

      if (project.array.length === 0) {
        const div = document.createElement('div');
        div.classList.add('todo-container');
        div.style.justifyContent = 'center';
        const p = document.createElement('p');
        p.classList.add('empty-todos');
        p.textContent = 'There is currently no task added.';
        div.append(p);
        body.append(div);
      }

      bodyHeading.textContent = `${project.name}`;
      project.array.forEach((eachtodo) => {
        _render(eachtodo);
      });
    }
  })
}

// renders the sidebarProjects
export function renderSideBarProjects() {
  projectsContainer.innerHTML = "";

  myProjects.forEach(project => {
    const div = document.createElement('div');
    div.classList.add('project')

    div.innerHTML = `
        <p>${project.name}</p>` 

    projectsContainer.append(div);
  })
}

// renders project in the main body
export function renderProjects() {
  body.innerHTML = "";

  const heading = document.querySelector('#heading');
  heading.textContent = "Projects";

  const button = document.querySelector('.add-btn-container');
  button.style.display = "none";

  if (myProjects.length === 0) {
    const div = document.createElement('div');
    div.classList.add('todo-container');
    div.style.justifyContent = 'center';
    const p = document.createElement('p');
    p.classList.add('empty-todos');
    p.textContent = 'There is currently no projects added.';
    div.append(p);
    body.append(div);
  }


  myProjects.forEach(project => {
    const div = document.createElement("div");
    div.classList.add("project-container");

    const divHeading = document.createElement('div');
    divHeading.classList.add('project-container-heading')

    divHeading.innerHTML = `
      <p class="title">${project.name}</p>
      <button class="delete-project-btn">
          <i class="fa-solid fa-trash"></i>
      </button>
    `
    div.append(divHeading);
    body.append(div);
  })

  _addFunctionality();
}

// adds functionality which lets user to go in the 
// project
function _addFunctionality() {
  // when todocontainer is clicked it drop downs 
  const todoContainer = document.querySelectorAll('.todo-container');
  todoContainer.forEach((eachtodoContainer) => {
    _dropDownFunctionality(eachtodoContainer); 
  });

  // when completedBtn is clicked text are crossed out
  const completedBtn = document.querySelectorAll('.completed-btn');
  completedBtn.forEach((eachBtn) => {
    _strikethrough(eachBtn);
  });

  // when deleteBtn is clicked the todo is deleted
  const deleteBtn = document.querySelectorAll('.delete-btn');
  deleteBtn.forEach((eachBtn) => {
    _deleteTodo(eachBtn);
  });

  const projectContainer = document.querySelectorAll('.project-container');
  projectContainer.forEach((eachprojectContainer) => {
    _newPage(eachprojectContainer); 
  });

  const sidebarProjectContainer = document.querySelectorAll(".project");
  sidebarProjectContainer.forEach((eachsidebarProject) => {
    _newPage(eachsidebarProject); 
  })

  // when deleteBtn is clicked the todo is deleted
  const deleteProjectBtn = document.querySelectorAll('.delete-project-btn');
  deleteProjectBtn.forEach((eachBtn) => {
    _deleteProject(eachBtn);
  }); 
}

// deletes a project from the projects array
// and saves it to the localStorage
function _deleteProject(eachBtn) {
  let newProjectsArray;
  eachBtn.addEventListener('click', () => {
    const confirmation = confirm("Are you sure you want to delete this project?");
    if (confirmation === true) {
      const projectContainer = eachBtn.parentElement.parentElement;
      const projectContainerHeading = projectContainer.querySelector('.project-container-heading');
      const para = projectContainerHeading.querySelector("p");
      console.log(para.textContent);
      newProjectsArray = myProjects.filter(project => {
        if (project.name.toLowerCase() === para.textContent.toLowerCase()) {
          return false;
        }else {
          return true;
        }
      });
      myProjects = newProjectsArray;
      _saveProjectsToLocalStorage();
      renderProjects();
      renderSideBarProjects();
    }
    else {
      return;
    }
  })
}

// renders new Page for a project
function _newPage(eachprojectContainer) {
  eachprojectContainer.addEventListener('click', (e) => {
    if (e.target.classList[1] === "fa-trash") {
      return;
    }
    const para = eachprojectContainer.querySelector('p')
    const title = para.textContent;
    myProjects.forEach(project => {
      if (project.name === title) {
        body.innerHTML = "";

        const heading = document.querySelector('#heading');
        heading.textContent = `${project.name}`;

        const button = document.querySelector('.add-btn-container');
        button.style.display = "flex";

        if (project.array.length === 0) {
          const div = document.createElement('div');
          div.classList.add('todo-container');
          div.style.justifyContent = 'center';
          const p = document.createElement('p');
          p.classList.add('empty-todos');
          p.textContent = 'There is currently no task added.';
          div.append(p);
          body.append(div);
        }

        project.array.forEach(eachtodo => {
          _render(eachtodo);
        })
        _addFunctionality();
      }
    })
  });
}


// dropDownFunctionality
// when this function is invoked a new class is added to todo
// body container which makes it visible to the user
function _dropDownFunctionality(eachtodoContainer) {
  if (myProjects.length === 0) {
    return;
  }
  
  const todoContainerBody = eachtodoContainer.querySelector('.todo-container-body');
  const todoContainerHeading = eachtodoContainer.querySelector('.todo-container-heading');
  todoContainerHeading.addEventListener('click', (e) => {
    if (e.target.classList[1] === 'fa-check' || e.target.classList[1] === "fa-xmark") {
      return; // skips if the the user clicks on any other button
    }

    todoContainerBody.classList.toggle('show-todo-container-body');

    const buttonContainer = todoContainerHeading.querySelector('.completed-delete-dropdown-container');
    const dropDownBtn = buttonContainer.querySelector('.dropdown-btn');
    dropDownBtn.classList.toggle('rotate');
  });
}


// strikethrough function which puts a line on the text 
// whenever a user clicks on the complete function 
// it also removes the line when user clicks on it again
// here this function also calls updateTodo to update the 
// completed property to true or false
function _strikethrough(eachBtn) {
  eachBtn.addEventListener('click', () => {
    const todoContainer = eachBtn.parentElement.parentElement.parentElement;
    const todoContainerHeading = eachBtn.parentElement.parentElement;
    const todoPara = todoContainerHeading.querySelector("p");
    const todoTitle = todoPara.firstChild;
    const pageHeading = document.querySelector("#heading");
    myProjects.forEach(project => {
      if (project.name === pageHeading.textContent) {
        project.array.forEach(eachtodo => {
          if (eachtodo.title == todoTitle.textContent && eachtodo.completed === false) {
            _updateTodo(project.array, eachtodo.title, false);
            const allPara = todoContainer.querySelectorAll('p');
            allPara.forEach((eachPara) => {
                const strikeThroughElement = document.createElement('s');
                strikeThroughElement.textContent = eachPara.textContent;
                /*eslint-disable */
                eachPara.innerHTML = ''; 
                eachPara.append(strikeThroughElement);
            });
          }
          else if (eachtodo.title === todoTitle.textContent && eachtodo.completed === true) {
            _updateTodo(project.array, eachtodo.title, true);
            const allPara = todoContainer.querySelectorAll("p");
            allPara.forEach((eachPara) => {
              const eachStrikePara = eachPara.querySelector("s");
              let text = eachStrikePara.textContent;
              eachPara.innerHTML = '';
              eachPara.textContent = text;
            });
          }
        })
      }
    })
  });
}


// deletes a todo when user clicks on the deleteBtn
// it asks user for confirmation if they say yes 
// it proceeds to delete that particular abj from the array
// and that array is nested inside eachproject obj inside 
// the project array.
// and at last it renders the new array
function _deleteTodo(eachBtn) {
  let mynewProjectTodosArray;
  eachBtn.addEventListener('click', () => {
    const confirmation = confirm("Are you sure you want to delete this todo?");
    if (confirmation === true) {
      const todoContainer = eachBtn.parentElement.parentElement.parentElement;
      const todoContainerHeading = eachBtn.parentElement.parentElement;
      const todoPara = todoContainerHeading.querySelector("p");
      const todoTitle = todoPara.firstChild;
      const heading = document.querySelector("#heading");
      myProjects.forEach(project => {
        if (project.name === heading.textContent) {
          mynewProjectTodosArray = project.array.filter(eachtodo => {
            if (eachtodo.title === todoTitle.textContent) {
              return false;
            }else {
              return true;
            }
          });
          project.array = mynewProjectTodosArray;
          _saveProjectsToLocalStorage();
          _renderTodoOfParticularProject(project.name);
        }
      })
    }
    else {
      return;
    }
  })
}

// updatesTodo to either completed true or conpleted false
// and calls saveProjectsToLocalStorage to update the new array
function _updateTodo (array, title, completed) {
  array.forEach((eachtodo) => {
    if (eachtodo.title === title && completed === false) {
      eachtodo.completed = true;
      _saveProjectsToLocalStorage();
    } else if (eachtodo.title === title && completed === true) {
      eachtodo.completed = false;
      _saveProjectsToLocalStorage();
    }
  });
};
