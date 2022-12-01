// SELECTORS  


const input = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');



    todoButton.addEventListener('click', addTodo);

    todoList.addEventListener('click', deleteCheck);


function addTodo(event) {
    event.preventDefault();
    if(input.value!=""){


        event.preventDefault();
        // TODO DIV

        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        const task = document.createElement('li');
        task.innerText = input.value;
        input.value="";
        todoDiv.appendChild(task);

        // complete button

        const finish = document.createElement('button');
        finish.innerHTML = '<i class="fas fa-check"></i>';
        finish.classList.add('finish');
        todoDiv.appendChild(finish);

        // delete button
        const trash = document.createElement('button');
        trash.innerHTML = '<i class="fas fa-trash"></i>';
        trash.classList.add('trash');
        todoDiv.appendChild(trash);
        todoDiv.appendChild(trash);



        todoList.appendChild(todoDiv);

    }
    
 

        
}

// Delete To Do

function deleteCheck(e){
 const item= e.target;
 if(item.classList[0]==='trash'){
     const del=item.parentElement;
     del.classList.add('remove');
     del.addEventListener('transitionend', function(){
         del.remove();
     })
 }

 if(item.classList[0]==='finish'){
     const todo=item.parentElement;
     todo.classList.toggle('finished');

 }

}