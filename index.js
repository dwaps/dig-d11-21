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
  deleteBt.addEventListener('click', () => todoDiv.remove());
  
  // IMBRICATION
  todoDiv.appendChild(todoStateInput);
  todoDiv.appendChild(todoTxtPar);
  todoDiv.appendChild(deleteBt);
  
  // INJECTION DANS LE DOM
  document
    .querySelector('.todos')
    .appendChild(todoDiv);
}


createTodo("Faire la vaisselle");
createTodo("Faire le ménage");
createTodo("Faire les courses");
