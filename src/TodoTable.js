import React from 'react';


 function TodoTable(props) {

    function deleteTodo(index) {
        props.setTodo(props.todos.filter((todo , i)=> 
             i !== index))
           }
    return(
        <div>
    <table>
    <tbody>
      <tr><th>Date</th><th>Description</th><th></th></tr>
     {
     props.todos.map( (todo,index) =>
     <tr key={index}>
      <td> {todo.date} </td>
       <td> {todo.description} </td>
       <td> <button  onClick = { () =>
       deleteTodo(index)
       } 
    
      > Delete</button></td>    
     </tr>)
     }
    
    </tbody>
  </table>
  </div>


)
    }
    export default TodoTable;
