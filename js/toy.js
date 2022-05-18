const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector('#greeting');
const no1 = document.querySelector("#quote");
const no2 = document.querySelector("#todo-form");
const no3 = document.querySelector("#weather");
const no4 = document.querySelector("#clock");
const hidden_classname="hidden";
const username_key = "username";
function onLoginSubmit(event){
  event.preventDefault();
  loginForm.classList.add(hidden_classname)
  const username = loginInput.value;
  localStorage.setItem(username_key, username);

paintGreetings(username);
}

function paintGreetings(username){
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(hidden_classname);
}

const saveUsername = localStorage.getItem(username_key);

  if (saveUsername === null){

    loginForm.classList.remove(hidden_classname);
    loginForm.addEventListener("submit", onLoginSubmit);
  }else{
 paintGreetings(saveUsername);
  }

