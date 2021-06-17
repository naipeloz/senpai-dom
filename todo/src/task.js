class Task {
  constructor (index) {
    this.index = index;
    this.id = `task-${index}`;
    this.value = '';
  }

  renderTask () {
    // Crear elementos del producto
    const task = document.createElement('div');
    const inputValue = document.createElement('input');
    const saveBtn = document.createElement('button');
    const removeBtn = document.createElement('button');
    // Agregar data de cada elemento
    task.classList.add('task');
    task.id = this.id
    inputValue.classList.add('value');
    saveBtn.classList.add('save-btn');
    saveBtn.setAttribute('data-parent', this.id);
    saveBtn.textContent = 'Actualizar';
    removeBtn.classList.add('remove-btn');
    removeBtn.setAttribute('data-parent', this.id);
    removeBtn.textContent = 'Eliminar';
    //Agregar elementos al contenedor
    task.appendChild(inputValue);
    task.appendChild(saveBtn);
    task.appendChild(removeBtn);
    return task;
  }
}