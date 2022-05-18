const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const toDos = []
const TODOS_KEY= "todos"

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo(){
     const li = event.target.parentElement;
     toDos = todos.filter(toDo => toDo.id !== parseInt(li.id))
     li.remove();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
     li.appendChild(span);
     span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText ="♣";
   button.addEventListener("click", deleteToDo);
   li.appendChild(span);
     li.appendChild(button);
     toDoList.appendChild(li);

}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newtTodoObj ={
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newtTodoObj);
    paintToDo(newtTodoObj);
    saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY)
console.log(savedToDos);
if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(paintToDo)
}

