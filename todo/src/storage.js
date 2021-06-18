function saveTasksLocalStorage (list) {
  localStorage.setItem('listTasks', JSON.stringify(list));
}

function getTasksLocalStorage () {
  const listTasks = JSON.parse(localStorage.getItem('listTasks'));
  return listTasks.map((item) => new Task(item.index, item.value));
} 

function getLastIndex () {
  const listTasks = JSON.parse(localStorage.getItem('listTasks'));
  return listTasks[listTasks.length - 1].index;
}