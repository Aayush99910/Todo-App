/*eslint-disable */

let todosArray; // initailising the todosarray

// getting todos from localStorage
const todosArrayFromLocalStorage = JSON.parse(localStorage.getItem('myTodos')); 


// if todos found in the localStorage we use that else
// make a new empty array
if (todosArrayFromLocalStorage) {
  todosArray = todosArrayFromLocalStorage;
} else {
  todosArray = [];
}

// DOM element
const body = document.querySelector('.main-body-todos');

// factory function which makes todo
export const createTodo = (title, dueDate, priority, description, completed) => ({
  title,
  dueDate,
  priority,
  description,
  completed
});

// this function pushes the object todo in the array
// and then saves the todoArray in the localStorage
export const saveTodo = (todo) => {
  todosArray.push(todo);
  _saveTodoToLocalStorage();
};

export const renderTodos = () => {
  _renderTodos('all');
};

export function renderTodayTodos() {
  _renderTodos('today');
}

export const renderUpcomingTodos = () => {
  _renderTodos('upcoming');
};

// renders each todo
function _render(eachtodo) {
  const todoContainer = document.createElement('div');
  todoContainer.classList.add('todo-container');

  const todoContainerHeading = document.createElement('div');
  todoContainerHeading.classList.add('todo-container-heading');

  let title;
  let s;
  if (eachtodo.completed === true) {
    title = document.createElement('p');
    title.classList.add('title');
    s = document.createElement("s");
    s.textContent = eachtodo.title;
    title.append(s);
  }else {
    title = document.createElement('p');
    title.classList.add('title');
    title.textContent = eachtodo.title;
  }

  const buttonDiv = document.createElement('div');
  buttonDiv.classList.add('completed-delete-dropdown-container');

  const completedBtn = document.createElement('button');
  completedBtn.classList.add('completed-btn');
  completedBtn.innerHTML = '<i class="fa-solid fa-check"></i>';

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

  const dropDown = document.createElement('button');
  dropDown.classList.add('dropdown-btn');
  dropDown.innerHTML = '<i class="fa-solid fa-angle-down"></i>';

  buttonDiv.append(completedBtn, deleteBtn, dropDown);

  const todoContainerBody = document.createElement('div');
  todoContainerBody.classList.add('todo-container-body');
  if (eachtodo.completed === true) {
    todoContainerBody.innerHTML = `
      <div class="priority-dueDate-container">
        <p class="todo-body-priority"><s>Priority: ${eachtodo.priority}</s></p>
        <p class="todo-body-dueDate"><s>DueDate: ${eachtodo.dueDate}</s></p>
      </div>
        <p class="todo-body-description"><s>Description: ${eachtodo.description}</s></p>
    `;
  }else {
    todoContainerBody.innerHTML = `
      <div class="priority-dueDate-container">
        <p class="todo-body-priority">Priority: ${eachtodo.priority}</p>
        <p class="todo-body-dueDate">DueDate: ${eachtodo.dueDate}</p>
      </div>
        <p class="todo-body-description">Description: ${eachtodo.description}</p>
    `;
  }
  /*eslint-disable */
  if (eachtodo.priority.toLowerCase() == 'low') {
    todoContainerHeading.classList.add('green');
  } else if (eachtodo.priority.toLowerCase() == 'medium') {
    todoContainerHeading.classList.add('yellow');
  } else if (eachtodo.priority.toLowerCase() == 'high') {
    todoContainerHeading.classList.add('red');
  }

  todoContainerHeading.append(title, buttonDiv);
  todoContainer.append(todoContainerHeading, todoContainerBody);
  body.append(todoContainer);
}

// renderTodo takes a argument
// renders according to the argument
// if choice is all renders all the todos
// if choice is today renders all the todos due today
/*eslint-disable */
function _renderTodos(choice) {
  const bodyHeading = document.getElementById('heading');
  body.innerHTML = ' ';
  if (todosArray.length === 0) {
    const div = document.createElement('div');
    div.classList.add('todo-container');
    div.style.justifyContent = 'center';
    const p = document.createElement('p');
    p.classList.add('empty-todos');
    p.textContent = 'There is currently no task added.';
    div.append(p);
    body.append(div);
  }

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentday = new Date().getDate();

  if (choice == 'all') {
    bodyHeading.textContent = 'Inbox';
    todosArray.forEach((eachtodo) => {
      _render(eachtodo);
    });
  } else if (choice == 'today') {
    bodyHeading.textContent = 'Today';
    const todayDay = `${currentYear}-${currentMonth}-${currentday}`;

    todosArray.forEach((eachtodo) => {
      if (todayDay == eachtodo.dueDate) {
        _render(eachtodo);
      }
    });
  } else if (choice == 'upcoming') {
    bodyHeading.textContent = 'Upcoming Tasks';

    todosArray.forEach((eachtodo) => {
      const fulldate = eachtodo.dueDate.split('-');
      const [year, month, day] = fulldate;
      if (year > currentYear || month > currentMonth || day > currentday) {
        _render(eachtodo);
      }
    });
  }
  _addFunctionality();
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
    todosArray.forEach(eachtodo => {
      if (eachtodo.title == todoTitle.textContent && eachtodo.completed === false) {
        _updateTodo(eachtodo.title, false);
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
        _updateTodo(eachtodo.title, true);
        const allPara = todoContainer.querySelectorAll("p");
        allPara.forEach((eachPara) => {
          const eachStrikePara = eachPara.querySelector("s");
          let text = eachStrikePara.textContent;
          eachPara.innerHTML = '';
          eachPara.textContent = text;
        });
      }
    })
  });
}


// deleted a todo when user clicks on the deleteBtn
// it asks user for confirmation if they say yes 
// it proceeds to delete that particular obj from the array
// and at last it renders the new array
function _deleteTodo(eachBtn) {
  let newTodosArray;
  eachBtn.addEventListener('click', () => {
    const confirmation = confirm("Are you sure you want to delete this todo?");
    if (confirmation === true) {
      const todoContainer = eachBtn.parentElement.parentElement.parentElement;
      const todoContainerHeading = eachBtn.parentElement.parentElement;
      const todoPara = todoContainerHeading.querySelector("p");
      const todoTitle = todoPara.firstChild;
      newTodosArray = todosArray.filter(eachtodo => {
        if (eachtodo.title === todoTitle.textContent) {
          return false;
        }else {
          return true;
        }
      });
      todosArray = newTodosArray;
      _saveTodoToLocalStorage();
      renderTodos();
    }
    else {
      return;
    }
  })
}

// updatesTodo to either completed true or conpleted false
// and calls saveTodoToLocalStorage to update the new array
function _updateTodo (title, completed) {
  todosArray.forEach((eachtodo) => {
    if (eachtodo.title === title && completed === false) {
      eachtodo.completed = true;
      _saveTodoToLocalStorage();
    } else if (eachtodo.title === title && completed === true) {
      eachtodo.completed = false;
      _saveTodoToLocalStorage();
    }
  });
};

// saves the todoArray in the localStorage
function _saveTodoToLocalStorage() {
  localStorage.setItem('myTodos', JSON.stringify(todosArray));
}

// dropDownFunctionality
// when this function is invoked a new class is added to todo
// body container which makes it visible to the user
function _dropDownFunctionality(eachtodoContainer) {
  if (todosArray.length === 0) {
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

// this function adds functionality like drop down 
// complete and delete 
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
}