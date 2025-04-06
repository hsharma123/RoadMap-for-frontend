let todoInput = document.getElementById('todoInput');
let addBtn = document.getElementById('addBtn');
let todoList = document.getElementById('todoList');

let todos = JSON.parse(localStorage.getItem('savedTodos')) || [];

const saveTodos = () => {
  localStorage.setItem('savedTodos', JSON.stringify(todos));
};

const createTodo = (taskText, index) => {
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = taskText;
  span.style.cursor = 'pointer';
  span.addEventListener('click', () => {
    span.classList.toggle('complete');
  });

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.addEventListener('click', () => {
    const newTaskText = prompt('Edit task', span.textContent);
    if (newTaskText) {
      todos[index] = newTaskText;
      saveTodos();
      renderTodos();
    }
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
  });

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);
};

const renderTodos = () => {
  todoList.innerHTML = '';
  todos.forEach((task, index) => createTodo(task, index));
};

const addTodo = () => {
  const todoTask = todoInput.value.trim();
  if (todoTask) {
    todos.push(todoTask);
    saveTodos();
    renderTodos();
    todoInput.value = '';
  }
};

todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTodo();
  }
});
addBtn.addEventListener('click', addTodo);

renderTodos();
