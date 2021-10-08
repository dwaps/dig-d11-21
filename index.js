const TODOS_KEY = "todos";
const todosStorage = localStorage.getItem(TODOS_KEY);
let todos = [];

if ("localStorage" in window && todosStorage && todosStorage.length) {
  todos = JSON.parse(todosStorage);
  for (let todo of todos) {
    createTodo(todo);
  }
}

function createTodo(txt) {
  // DECLARATION
  const todoDiv = document.createElement('div');
  const todoStateInput = document.createElement('input');
  const todoTxtPar = document.createElement('p');
  const deleteBt = document.createElement('button');
  
  // CONFIGURATION
  todoDiv.className = 'todo';
  todoStateInput.type = 'checkbox';
  todoTxtPar.className = 'todo-txt';
  todoTxtPar.innerText = txt;
  deleteBt.className = 'bt-closed';
  deleteBt.innerHTML = '&times;';
  deleteBt.addEventListener('click', () => {
    if (todoStateInput.checked || confirm("Veux-tu vraiment supprimer la tâche ?")) {
      todos.splice(todos.indexOf(txt), 1);
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


const inputUserTag = document.querySelector('input');
const btSubmitTag = document.querySelector('input + input');

btSubmitTag.addEventListener('click', function() {
  const userInput = inputUserTag.value;
  if (userInput.length > 3) {
    createTodo(userInput);
    todos.push(userInput);
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
    inputUserTag.value = '';
    inputUserTag.focus();
  }
})
