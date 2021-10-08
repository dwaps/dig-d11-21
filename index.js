const TODOS_KEY = "todos";
const todosStorage = localStorage.getItem(TODOS_KEY);
let todos = [];

class Todo {
  constructor(txt) {
    this.txt = txt;
    this.done = false;
  }
}

if ("localStorage" in window && todosStorage && todosStorage.length) {
  todos = JSON.parse(todosStorage);
  for (let todo of todos) {
    createTodo(todo);
  }
}

/**
 * @param {Todo} todo 
 */
function createTodo(todo) {
  // DECLARATION
  const todoDiv = document.createElement('div');
  const todoStateInput = document.createElement('input');
  const todoTxtPar = document.createElement('p');
  const deleteBt = document.createElement('button');
  
  // CONFIGURATION
  todoDiv.className = 'todo';
  todoStateInput.type = 'checkbox';
  todoStateInput.checked = todo.done;
  todoStateInput.addEventListener('change', () => updateTodoState(todo));
  todoTxtPar.className = 'todo-txt';
  todoTxtPar.innerText = todo.txt;
  deleteBt.className = 'bt-closed';
  deleteBt.innerHTML = '&times;';
  deleteBt.addEventListener('click', () => {
    if (todoStateInput.checked || confirm("Veux-tu vraiment supprimer la tâche ?")) {
      todos.splice(todos.indexOf(todo), 1);
      localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
      todoDiv.remove();
    }
  });
  
  // IMBRICATION
  todoDiv.appendChild(todoStateInput);
  todoDiv.appendChild(todoTxtPar);
  todoDiv.appendChild(deleteBt);
  
  // INJECTION DANS LE DOM
  document
    .querySelector('.todos')
    .appendChild(todoDiv);
}

function updateTodoState(todo) {
  todo.done = !todo.done;
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}


const inputUserTag = document.querySelector('input');
const btSubmitTag = document.querySelector('input + input');

btSubmitTag.addEventListener('click', function() {
  const userInput = inputUserTag.value;
  if (userInput.length > 3) {
    const todo = new Todo(userInput);
    createTodo(todo);
    todos.push(todo);
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
    inputUserTag.value = '';
    inputUserTag.focus();
  }
})
