const list = [];
let index = 0;

function addTask() {
  const task = new Task(index);
  list.push(task);
  index++;
  renderTasks();
  eventRemoveTask();
  eventSaveTask();
}

saveTask = (e) => {
  console.log("SAVE: ", e)

}

function removeTask (e) {
  const id = this.getAttribute("data-parent");

    list.forEach((task) => {
      if (task.id==id) {
      list.splice(task.index);
    
    }
  })



  const elemento = document.getElementById (id);

  this.removeEventListener("click",removeTask,false);

  const btnsActualizar = elemento.getElementsByClassName ("save-btn");
  btnsActualizar[0].removeEventListener("click",saveTask,false);

  elemento.remove();

}

function eventRemoveTask() {
  var tasks = document.getElementsByClassName("remove-btn");
  for (var i = 0; i < tasks.length; i++) {
    tasks[i].addEventListener('click', removeTask);
  }
}

function eventSaveTask() {
  var tasks = document.getElementsByClassName("save-btn");
  for (var i = 0; i < tasks.length; i++) {
    tasks[i].addEventListener('click', saveTask);
  }
}

function renderTasks() {
  const taskContainer = document.getElementById('task_container');
  taskContainer.innerHTML = '';
  list.forEach((task) => {
    const taskDOM = task.renderTask();
    taskContainer.appendChild(taskDOM);
  })
}

function init() {
  window.onload = () => {
  }
}

init();
