const btnAgregarTarea = document.querySelector('#agregarTarea');
const inputTarea = document.querySelector('#inputTarea');

const listaTareas = document.querySelector('#listaTareas');

btnAgregarTarea.addEventListener('click', () => {
    const nuevaTarea = inputTarea.value.trim();

    if (!nuevaTarea) return;

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = nuevaTarea;

    const btnEliminarTarea = document.createElement('button');
    btnEliminarTarea.classList.add('btn', 'btn-danger', 'ms-2');
    btnEliminarTarea.textContent = 'Eliminar';
    btnEliminarTarea.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(btnEliminarTarea);

    listaTareas.appendChild(li);

    inputTarea.value = '';
});
