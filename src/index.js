import { update } from 'lodash';
import './style.css';

const ul=document.querySelector('ul'); //to select table element from html

const form=document.querySelector('form'); //to select form element from html

const input=document.querySelector('form > input'); //to select input element from html
 console.log(form, input);

 form.addEventListener('submit', (event) =>{
     event.preventDefault();        //to stop the page update

 })
const todo=[                             //todo table initializing
    {
        text:'task 1',                    //object with the name of task and the status
        done:true
    },
     {
        test:'task 2',
        done:false
    }
];
const displayTodo = () =>{                          //function to display and a map callback function to scan the table and creat nodes
    const todonode=todo.map((todo, index)=>{
        return createTodoElement (todo, index);
    });
    ul.innerHTML ="";
    ul.append(...todonode);   //spread the table returend from map
}
const createTodoElement= (todo, index)=>{
    const li=document.createElement("li");     // function to creaat elemnt 
    li.innerHTML=`<span class="todo ${todo.done ? "done": ""}"></span>
    <p>${todo.text} </p>
    <button>Delete</button>
    `;
    return li;
}
displayTodo();

