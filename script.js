document.addEventListener("DOMContentLoaded", function () {
  // Selecting DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Add a task to the list
  function addTask() {
    // Get task from input field
    const taskText = taskInput.ariaValueMax.trim();

    // Alert user if input empty
    if (taskText === "") {
      alert("Please Enter a task");
      return;
    }

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
    });

    // Append the remove button to the list item
    li.appendChild(removeButton);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field after adding the task
    taskInput.value = "";
  }

  // Add task on button click
  addButton.addEventListener("click", addTask);

  // Add task on the Enter key press in the input field
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
