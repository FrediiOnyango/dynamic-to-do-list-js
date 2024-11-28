document.addEventListener("DOMContentLoaded", function () {
  // Selecting DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Load tasks from Local Storage on page load
  function LoadTask() {
    // Retrieve tasks from Local Storage and parse them
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    // Iterate over the stored tasks and add them to the DOM
    storedTasks.forEach((taskText) => addTask(taskText, false));
  }

  // Add a task to the list
  function addTask(taskText, save = true) {
    if (taskText.trim() === "") return;
    // // Get task from input field
    // const taskText = taskInput.ariaValueMax.trim();

    // // Alert user if input empty
    // if (taskText === "") {
    //   alert("Please Enter a task");
    //   return;
    // }

    // Create a new list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create a remove button for the task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    // Attach an event listener to the remove button
    removeButton.addEventListener("click", function () {
      taskList.removeChild(li);
      removeTaskFromStorage(taskText);
    });

    // Append the remove button to the list item
    li.appendChild(removeButton);

    // Append the list item to the task list
    taskList.appendChild(li);

    // // Clear the input field after adding the task
    // taskInput.value = "";

    // Save the task to Local Storage
    if (save) {
      saveTaskToStorage(taskText);
    }
  }

  // Save a task to Local Storage
  function saveTaskToStorage(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }

  // Remove a task from Local Storage
  function removeTaskFromStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks = storedTasks.filter((task) => task !== taskText);

    // Remove task from the Array
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
    // Update Local Storage
  }

  // Add task on button click
  addButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText) {
      addTask(taskText);
      taskInput.value = "";
      // Clear after adding task
    }
  });

  // Add task on the Enter key press in the input field
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const taskText = taskInput.value.trim();
      if (taskText) {
        addTask(taskText);
        taskInput.value = "";
        // Clear input after adding task
      }
    }
  });
  // Load tasks from local Storage when the page is loaded
  LoadTask();
});
