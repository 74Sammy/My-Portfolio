/*
function addTodo(){
  const textInput = document.querySelector(".js-todo-input").value
  const date = document.querySelector(".todo-date").value

if(!textInput || !date){
  alert("Please fill all fields")
}

  let container = document.querySelector(".todo-list")
 container.innerHTML = ` <p>${textInput} - ${date}</p> `
}
*/


const todoList = [{
  name:'Make dinner',
  date:'2023-12-14'
},
{
  name:'Church time',
  date:'2023-12-14'
}];

//renderTodoList ()

function renderTodoList () {
  let todoListHTM = '';

  for ( let i = 0; i < todoList.length; i++) {
  const todoObject = todoList[i];
  const name = todoObject.name;
  const date = todoObject.date
  
      const container = `
    <div>${name}</div>
    <div>${date}</div>
    <button onclick ="
    todoList.splice(${i}, 1);
    renderTodoList();
    ">Delete</button>
      `;
  todoListHTM += container;
  }
  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTM
  }
  


function addTodo() {
  const inputElement = document.querySelector('.js-todo-input')
  const name = inputElement.value 

  const dateElement = document.querySelector('.js-todo-date')
  const date = dateElement.value; 

  todoList.push({//name: name, 
    //date: date
  name,
date})


inputElement.value = '';

if(!name || !date){
  alert("Please fill all fields")
}
renderTodoList();
}







