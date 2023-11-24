
    
   

    const btn = document.querySelector("[data-form-btn]");

    const createTask = (evento) => {

    evento.preventDefault();
    const input = document.querySelector("[data-form-imput]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card");
    input.value = "";
    
    const taskContent = document.createElement("div"); 
    const titleTask = document.createElement("span");

    titleTask.classList.add("task");
    titleTask.innerText = value;

    taskContent.appendChild(checkComplete());      
    taskContent.appendChild(titleTask);
   
    //task.innerHTML = content;
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);  
  }

  btn.addEventListener("click", createTask);

  const checkComplete = () => {
  const i = document.createElement("i");
  i.classList.add("far");  
  i.classList.add("fa-check-square");
  i.classList.add("icon");
    //Tambien se pueden agregar en el mismo parentesis agregando comas
  i.addEventListener("click", completeTask);  
     return i;
  }

  const completeTask = (event) => {
  
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
  };

  const deleteIcon = () => {
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", deleteTask);
    return i;
  }
  const deleteTask = (event) => {
    const parent = event.target.parentElement;
    parent.remove();
  };



/* Esta funcion pasa a funcion flecha o arrow
btn.addEventListener("click", function(evento){
    
    evento.preventDefault();
    const input = document.querySelector("[data-form-imput]");    
    console.log(input.value);
});

Lo que aprendimos en esta aula:

Agregar la clase CSS utilizando el método toggle
Utilizar el atributo parentElement para subir un elemento en el árbol del DOM
Encontrar el objetivo del evento utilizando la propiedad target
Utilizar IIFE


Todos los elementos en nuestro árbol de DOM son nodos y todos los nodos pueden ser accedidos vía JavaScript. Los nodos pueden ser eliminados, creados o modificados. Durante el curso utilizamos el método appendChild que siempre es implementado al final del nodo, para colocar un nodo hijo dentro del nodo padre.

Existen otros métodos que podemos utilizar para manipular nodos:

insertBefore(padre, hijo): Coloca un nodo antes del otro
replaceChild(elemento1, elemento2): Sustituye el nodo del elemento 1 por el nodo del elemento 2
removeChild(elemento): Remueve un nodo del árbol
*/
