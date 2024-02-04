var counter = 0;
var task = [];

function createTask(title, description, dueDate) {
    return {
        id: ++counter,
        title: title,
        description: description,
        dueDate: dueDate,
        completed: false
    };
}

function addTask() {
    // Get input values
    let title = document.getElementById('titleInput').value;
    let description = document.getElementById('descriptionInput').value;
    let dueDate = document.getElementById('dueDateInput').value;

    // Create a task object
    let taskObj = createTask(title, description, dueDate);

    // Add the task to the array
    task.push(taskObj);

    // Refresh the task list
    displayTasks();
}

function markTaskAsCompleted() {
    // Get input value
    let taskId = parseInt(document.getElementById('taskIdInput').value);

    // Mark the task as completed
    let foundTask = task.find(t => t.id === taskId);
    if (foundTask) {
        foundTask.completed = true;
        // Refresh the task list
        displayTasks();
    } else {
        console.log("No task found with the given ID.");
    }
}

function displayTasks() {
    // Get the taskList element
    let taskListElement = document.getElementById('taskList');

    // Clear the existing content
    taskListElement.innerHTML = '';

    // Loop through tasks and display details
    task.forEach(t => {
        let taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.innerHTML = `
            <p>ID: ${t.id}</p>
            <p>Title: ${t.title}</p>
            <p>Description: ${t.description}</p>
            <p>Due Date: ${t.dueDate}</p>
            <p>Completed: ${t.completed ? 'Yes' : 'No'}</p>
            <hr>
        `;
        taskListElement.appendChild(taskElement);
    });
}
