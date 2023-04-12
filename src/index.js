document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

const submitBtn = document.querySelector('input[type=submit]');

function handleTodo(event){
  event.preventDefault();
  const newTodo = document.createElement('li');
  const newTodoDescription = document.querySelector('#new-task-description').value;
  newTodo.innerText = newTodoDescription;
  document.querySelector('div#list > ul').append(newTodo);
}

submitBtn.addEventListener('submit', handleTodo);