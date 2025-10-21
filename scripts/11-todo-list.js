const todoList = [ {
  name:'make dinner', 
  dueDate:'2022-12-22' 
 },{
 name: 'washe dishes',
 dueDate:'2022-12-22' 

 }
];

   
renderTodoList();


 function renderTodoList(){
let todolistHmtl="";


for(let i=0; i < todoList.length; i++){
  const todoObject=todoList[i];
 // const name=todoObject.name;
//const dueDate=todoObject.dueDate;

const {name, dueDate}=todoObject;

  const html= `
        <div >${name}</div>
        <div> ${dueDate}</div>
      
 
        <button onclick="
           todoList.splice(${i}, 1);
           renderTodoLis();
        " class="delete-todo-button">delete</button> 
        ` ;

  todolistHmtl +=html;
}


document.querySelector('.js-todo-list').innerHTML=todolistHmtl;

}

function addTodo(){
 const inputElement= document.querySelector('.js-name-input');
 const name=inputElement.value;

 const dateInputElemnet=document.querySelector('js-due-date-input');

const dueDate=dateInputElemnet.value;

 todoList.push
 ({
 // name:name,
  //dueDate:dueDate
  name,
  dueDate
}
 );





 inputElement.value='';


renderTodoList();
}