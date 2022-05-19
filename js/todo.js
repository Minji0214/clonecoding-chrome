const toDoForm = document.getElementById("todo-form");  //form
const toDoInput = toDoForm.querySelector("input"); //form안에있는 인풋박스
const toDoList = document.getElementById("todo-list");   //
const toDos = []
const TODOS_KEY= "todos"




function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // todos배열을 스토리지에 저장, 단 텍스트형태로  ["a",'b']
}

function deleteToDo(){
     const li = event.target.parentElement;  //버튼클릭시 어떤 버튼을 누른지 모름 --> event는 property를 가지는데 어떤 버튼을 가졌는지 알려줌.
      //  event.target.parentElement.innerHTML -->어떤 버튼이 클릭햇는지의 parent요소의 text는 <li>블라블라x<li> 그런 의미로 바로 윗줄의 코드를 사용                                   //
       li.remove();
       toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
    saveToDos()
}

function paintToDo(newToDo) {      //// 뭘 해야할지 모를땐 인자를 주기 object 3 --> 그냥 값을 받으면 뭐가들어오냐 newtodo값이 들어옴.
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
     span.innerText = newToDo.text;    //span에 넣은 텍스는 사용자가 form 에서 우리에게 준 newtodo값
    const button = document.createElement("button");  //li가 생기기 전에 버튼을 만들어줌
    button.innerText ="     ✔      ";
   button.addEventListener("click", deleteToDo);
   li.appendChild(span);       //버튼을 넣을거라서 특별히 span을 추가
     li.appendChild(button); // 만들어진 공간에 버튼을 붙인다.
     toDoList.appendChild(li); // 만들어진 세트를 원하는 위치 즉, li안에 넣기

}

function handleToDoSubmit(event){  //submit 실행시: 값저장, 스토리지저장, 페인트함수, save함수 모두 실행
    event.preventDefault();
    const newTodo = toDoInput.value;    //바로아래 값을 비우기 전에 값을 저장하기 // newtodo는 값을 복사한거임. 값 그자체가 아님
    toDoInput.value = "";
    const newtTodoObj ={
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newtTodoObj); //submit발생시 todos라는 배열에 value값이 push됨.
    paintToDo(newtTodoObj);  // 3번 값 -> newtodo에서 받은 입력값을  paintodo함수에 넣어서 호출 --> 3번 paintodo will know what to paint 즉 새로운 function에 값을 보내는 거임
                              // 정리하자면 함수안에서 선언된  newtodo값을 paintodo함수 안에 집어넣고 그 안에서 patintodo함수를 실행한 것과 같다.
    saveToDos();// 이함수는 todos 배열을 storage에 저장하는 함수 즉 앞에서 배열에 값이 추가 됐고, 그후 추가된 배열을 스토리지에 저장하는 함수실행
}
toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY)
if(savedToDos !==null) {  // if savedtodos existed
    const parsedToDos = JSON.parse(savedToDos);   //JSON.stringify를 사용하여 배열을 JSON 문자열로 변환한 다음 JSON.parse를 사용하여 문자열을 다시 배열로 변환합니다.
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
function sexyFilter(item) {
    if (item !== deleteToDo(item)) {
        return true;
    }
}
