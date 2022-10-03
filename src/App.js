import React, {useState} from 'react';
import './App.css';

import TodoTable from './TodoTable';


function App() {
  const [uInput, setUInput] = useState({
    description:'',
    date:''
    })

  const [todos, setTodos] = useState([]) 

  const inputChange = (event) => {
    setUInput({...uInput, [event.target.name]:event.target.value})
  
  }

  


  const handleClick = (event) => {  
    event.preventDefault()
    setTodos([...todos,uInput])
  }
 
  return (
    <div className="App">
      <header className="App-header">   
        <p> Simple To Do List App        
        </p>    
      </header>     
        <p>Add to do</p>

        <form onSubmit={handleClick}>
          <label>Description:</label>
          <input type="text" name="description" value={uInput.description} onChange={inputChange}/>
          
          <label>Date:</label>
          <input type="date" name="date" value={uInput.date} onChange={inputChange}/>

          <input type="submit" value="Submit"/>
        </form>
        <TodoTable todos={todos} setTodo={setTodos} />  
        
    </div>
  );
}

export default App;
