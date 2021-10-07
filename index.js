// DECLARATION
const todoDiv = document.createElement('div');
const todoStateInput = document.createElement('input');
const todoTxtPar = document.createElement('p');
const deleteBt = document.createElement('button');

// CONFIGURATION
todoDiv.className = 'todo';
todoStateInput.type = 'checkbox';
todoTxtPar.className = 'todo-txt';
todoTxtPar.innerText = "Lorem ipsum dolor sit amet consectetur.";
deleteBt.className = 'bt-closed';
deleteBt.innerHTML = '&times;';

// IMBRICATION
todoDiv.appendChild(todoStateInput);
todoDiv.appendChild(todoTxtPar);
todoDiv.appendChild(deleteBt);

// INJECTION DANS LE DOM
document
  .querySelector('.todos')
  .appendChild(todoDiv);


  
// <div class="todo">
//   <input type="checkbox">
//   <p class="todo-txt">Lorem ipsum dolor sit amet consectetur.</p>
//   <button class="bt-closed">&times;</button>
// </div>
