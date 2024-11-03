const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskDatetime = document.getElementById('task-datetime');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addTask(taskInput.value, taskDatetime.value);
    taskInput.value = '';
    taskDatetime.value = '';
});

function addTask(task, datetime) {
    const taskItem = document.createElement('li');
    
    const taskText = document.createElement('span');
    taskText.classList.add('task-text');
    taskText.textContent = `${task} (Due: ${new Date(datetime).toLocaleString()})`;
    
    const actions = document.createElement('div');
    actions.classList.add('actions');

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.classList.add('complete');
    completeBtn.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit');
    editBtn.addEventListener('click', () => editTask(taskItem, taskText, datetime));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', () => taskItem.remove());

    actions.appendChild(completeBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    taskItem.appendChild(taskText);
    taskItem.appendChild(actions);

    taskList.appendChild(taskItem);
}

function editTask(taskItem, taskText, datetime) {
    const newTask = prompt('Edit task', taskText.textContent.split(' (Due: ')[0]);
    const newDatetime = prompt('Edit due date and time', datetime);

    if (newTask && newDatetime) {
        taskText.textContent = `${newTask} (Due: ${new Date(newDatetime).toLocaleString()})`;
    }
}
