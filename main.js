var addBtn = document.getElementById('addBtn');
//var deleteItem = document.getElementById('myList');
var ul = document.getElementById('todoListItems');
//var li = document.getElementById('itemsList');
//var div = document.querySelector('myList');
var delBtn = document.getElementsByTagName('button');

 addBtn.addEventListener('click', function(){
  var todo =  prompt('Add a todo');
  

  showTodos(todo);
  
  var todoItem = document.createElement('LI');
  var delBtn = document.createElement('button');
      

    if(todoItem.innerHTML = todo){
        delBtn.setAttribute('id', todoItem.id);
        delBtn.setAttribute('class', 'delete');
        delBtn.textContent = 'Delete';

        delBtn.onclick =deleteTodo;

        todoItem.appendChild(delBtn);
        ul.appendChild(todoItem);
    } else {
      //  todoItem.removeChild(button);
    }

     
})

function deleteTodo(e){
    var id = e.target.id;
   // console.log('delete an item ', + id );

    var todoItems = 'todoText' + id;
    localStorage.removeItem(todoItems);

    for (var i = 0; i < todoItems.length; i++ ){
        if(todoItems[i].id == id){
            todoItems.splice(i, 1);
            break;
        }
    }

    var li = e.target.parentElement;
    var ul = document.getElementById("todoListItems");
    ul.removeChild(li);

   // showTodos(todo);
}



// function deleteTodo(ul) {
//     var todoItem = JSON.parse(localStorage.getItem('todoItems'));

//    for (var i = 0; i < todoItem.length; i++){
//        if(todoItem[i].todoList === todoList){
//            todoItem.splice(i, 1);
//        }
//    }
//    localStorage.setItem('todoItems', JSON.stringify(todoItems));

// }

// deleteBtn.addEventListener('click', function(){

//     var todoItem = JSON.parse(localStorage.getItem('todoItems'));

//    for (var i = 0; i < todoItem.length; i++){
//        if(todoItem[i].todoList === todoList){
//            todoItem.splice(i, 1);
//        }
//    }
//    localStorage.setItem('todoItems', JSON.stringify(todoItems));

// })

window.onload = function() {
     var todoItems = JSON.parse(localStorage.getItem('todoItems'));
    if(todoItems !== null){  
    }
}

function showTodos(todo) {
    var todoList = {
        todoText: todo,
        completed: false
      }
      
      if (localStorage.getItem('todoItems') === null){
        var todoItems = [];
        todoItems.push(todoList);
        localStorage.setItem('todoItems', JSON.stringify(todoItems));
      }else {
        var todoItems = JSON.parse(localStorage.getItem('todoItems'));
  
        todoItems.push(todoList);
  
        localStorage.setItem('todoItems', JSON.stringify(todoItems));
      
    }

    //var todoItems = 'todoText' + id;
    // var todoItems = JSON.parse(localStorage.getItem('todoItems'));
  
    // localStorage.removeItem(todoItems);

   
   // deleteTodo(e);
}


