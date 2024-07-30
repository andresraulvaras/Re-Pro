


// Selecciona el botón que añade una nueva tarea
const button = document.querySelector(".area_button");

// Función que se ejecuta al hacer clic en el botón
const listado = (evento) => {
    evento.preventDefault();    // Evita el comportamiento por defecto del formulario
    const input = document.querySelector(".area_input");
    const value = input.value;
    console.log(value);   
    const listado = document.querySelector("[data-list]");// Selecciona el contenedor de la lista
    //const task = document.querySelector("[data-task]");
    const datacard = document.createElement("li");   
    datacard.classList.add("card");
    input.value = "";

    // Crea el contenido de la tarea
    const taskContent = document.createElement("div");
    taskContent.appendChild(chekComplete());// Agrega el icono de completar
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;// Agrega el texto de la tarea
    taskContent.appendChild(titleTask);
    // taskContent.appendChild(deleteIcono());

    // Agrega el contenido y el icono de eliminar a la tarjeta
    datacard.appendChild(taskContent);
    datacard.appendChild(deleteIcono());

    // Agrega la tarjeta al contenedor de la lista
    listado.appendChild(datacard);
    //console.log(contenido);
    //console.log(task);
}

// Asocia la función listado al evento de clic del botón
button.addEventListener("click", listado);

// Función que crea el icono de completar tarea
const chekComplete = () => {
    const i = document.createElement("i");
    i.classList.add("fa", "fa-check-square-o");
    i.addEventListener("click", completeTask);// Asocia el evento de click
    return i;
};

// Función que maneja el evento de clic en el icono de completar tarea
const completeTask = (event) => {
    console.log(event);
    const elemento = event.target;
    elemento.classList.toggle("fa-check-square");   
    elemento.classList.toggle("fa-check-square-o");
};

// Función que crea el icono de eliminación de tarea
const deleteIcono = () => {
    //const contenido =`<i class="fa fa-trash" aria-hidden="true"></i>`;
    const i = document.createElement("i");
    i.classList.add("fa", "fa-trash");
    i.addEventListener("click", deleteAccion);
    return i
};

// Función que maneja el evento de clic en el icono de eliminación de tarea
const deleteAccion = (event) => {
    console.log(event.target);
    console.log(event.target.parentElement);
    const cardRemove = event.target.parentElement;
    cardRemove.remove();
};


//<div>
// <i class="fa fa-check-square-o" aria-hidden="true"></i>
//</div>
// datacard.innerHTML = contenido;
//<span class="task">${value}</span>


