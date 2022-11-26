/* eslint-disable */
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
  const projectContainer = document.querySelectorAll('.project-container');
  projectContainer.forEach((eachprojectContainer) => {
    _newPage(eachprojectContainer); 
  });

  // when deleteBtn is clicked the todo is deleted
  const deleteProjectBtn = document.querySelectorAll('.delete-project-btn');
  deleteProjectBtn.forEach((eachBtn) => {
    _deleteProject(eachBtn);
  }); 
}


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

// renders each project
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

        project.array.forEach(project => {
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
      }
    })
  });
}