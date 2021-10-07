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
    inputUserTag.value = '';
    inputUserTag.focus();
  }
})
