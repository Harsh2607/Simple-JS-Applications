const newTaskValue = document.getElementById("newTask");
const tasksListValue = document.getElementById("tasksList");
const addBtnValue = document.getElementById("addTaskBtn");

addBtnValue.addEventListener("click", function () {
    const newTask = newTaskValue.value;
    if (newTask !== "") {
        createTask(newTask);
        newTaskValue.value = "";
    }
});

function createTask(taskContent) {
    const newTaskItem = document.createElement("li");
    newTaskItem.innerText = taskContent;
    newTaskItem.classList.add("task-item"); // Add a class to newly created tasks

    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = '&#10003;'; // Tick symbol
    completeBtn.classList.add("completeBtn");
    completeBtn.addEventListener("click", function () {
        newTaskItem.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '&#10005;'; // Cross symbol
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.addEventListener("click", function () {
        newTaskItem.remove();
    });

    newTaskItem.appendChild(completeBtn);
    newTaskItem.appendChild(deleteBtn);
    tasksListValue.appendChild(newTaskItem);
}
