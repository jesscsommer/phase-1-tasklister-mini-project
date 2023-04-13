document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');

  form.addEventListener('submit', handleTodo);

  function handleTodo(event){
    const newTodo = document.createElement('li');
    const newTodoDescription = document.querySelector('#new-task-description').value;
    newTodo.innerText = newTodoDescription;
    document.querySelector('div#list > ul').append(newTodo);
    event.preventDefault();
  }

});
