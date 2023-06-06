import React, {Fragment, useState, useEffect} from 'react';
import EditTodo from './EditTodo';

const ListTodos = () => {
    // for putting the data in the state
    const [todos, setTodos] = useState([]);
    
    //delete todo function

    async function deleteTodo(id) {
        try{
            const res = await fetch(`http://localhost:5000/todos/${id}`, {method: "DELETE"});
            // will get rid of data without refreshing, becuase it will check the id that we're trying to get rid of, and will compare with the id's of the other todo's 
            // no match, then it will be spit out in the new state
            setTodos(todos.filter(todo => todo.todo_id != id));
        }catch (err){
            console.error(err.message)
        }
    }
    
    async function getTodos() {
        const res = await fetch("http://localhost:5000/todos");

        // Data recived is in JSON, so need to parse it
        // add the await keyword because it takes time to parse
        const todoArray = await res.json();
        setTodos(todoArray);
        // console.log(todoArray);
    }
useEffect(()=> {

    getTodos();
}, []);
    console.log(todos);
    return(
    <Fragment>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*
          <tr>
           <td>John</td>
           <td>Doe</td>
           <td>john@example.com</td>
          </tr>
         */}
          {
            todos.map(todo => {
                return(
                <tr key={todo.todo_id}>
                  <td>{todo.description}</td>
                  <td><EditTodo todo={todo}/></td>
                  <td>
                    {/*whenever button is pressed, need to run a function that sends request to restful api to Delete item  */}
                    <button className='btn btn-danger' onClick={() => 
                    deleteTodo(todo.todo_id)}>Delete</button>
                  </td>
                </tr>
                )
                
            })}

        </tbody>
      </table>
    </Fragment>
    
    )
};

export default ListTodos;

// Bootstrap 4 tables W3Schools