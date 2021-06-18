const list = [];
let listaClon = [];
let index = 0;

function addTask() {
  const task = new Task(index);
  list.push(task);
  index++;
  renderTasks(list);
  eventRemoveTask();
  eventSaveTask();
}

function search(){
  let valorABuscar = document.getElementById("search_input_task").value;
  console.log(valorABuscar);

  if (valorABuscar === ""){
    renderTasks(list);
  }
  else{
    listaClon = list.filter((item)=> item.value === valorABuscar);
    renderTasks(listaClon);
  }
}

saveTask = (e) => {
  console.log("SAVE: ", e)

}

removeTask = (e) => {
  console.log("REMOVE: ", e)
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

function renderTasks(lista) {
  const taskContainer = document.getElementById('task_container');
  taskContainer.innerHTML = '';
  lista.forEach((task) => {
    const taskDOM = task.renderTask();
    taskContainer.appendChild(taskDOM);
  })
}

function init() {
  window.onload = () => {
  }
}

init();
