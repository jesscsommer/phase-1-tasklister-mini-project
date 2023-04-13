document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#create-task-form');

  form.addEventListener('submit', handleTodo);

  function handleTodo(event){
    const newTodo = document.createElement('li');

    const newTodoDescription = document.querySelector('#new-task-description').value;
    newTodo.innerText = newTodoDescription;

    const newDeleteBtn = document.createElement('button');
    newDeleteBtn.innerText = 'x';
    newDeleteBtn.className = 'deleteBtn';
    newTodo.append(newDeleteBtn);

    document.querySelector('div#list > ul').append(newTodo);
    event.preventDefault();

    newDeleteBtn.addEventListener('click', (event) => event.target.parentElement.remove());
  }
});
