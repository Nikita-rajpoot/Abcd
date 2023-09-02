const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${taskText}</span>
      <button class="complete">Complete</button>
      <button class="delete">Delete</button>
    `;
    
    const completeButton = li.querySelector(".complete");
    const deleteButton = li.querySelector(".delete");
    
    completeButton.addEventListener("click", () => {
      li.classList.toggle("completed");
    });
    
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(li);
    });

    taskList.appendChild(li);
    taskInput.value = "";
  }
}
