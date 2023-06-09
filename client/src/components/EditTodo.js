import React, {Fragment, useState} from 'react';



const EditTodo = ({todo}) => {
    
    // editText function definition
    const editText = async (id) => {
        try{

            const body = {description};

            const res = await fetch(`http://localhost:5000/todos/${id}`, 
                                {method: "PUT", 
                                headers:{"Content-Type": "application/json"}, 
                                body: JSON.stringify(body)});

            // testing with refreshing                    
            // console.log(res);
            //without refreshing:
            window.location = "/";
        }catch (err){
            console.error(err.message);
        }
    }

    // console.log(todo);

    const [description, setDescription] = useState(todo.description);
    return (
        <Fragment>
           
          <button type="button" className="btn btn-warning" data-toggle="modal" data-target= {`#id${todo.todo_id}`}>
            Edit
          </button>
          {/* id = "id21" */}
              
          <div className="modal" id={`id${todo.todo_id}`} onClick={() => setDescription(todo.description)}>
            <div className="modal-dialog">
              <div className="modal-content">
              
              
                <div className="modal-header">
                  <h4 className="modal-title">Edit Todo Below</h4>
                  <button type="button" className="close" data-dismiss="modal" onClick={() => setDescription(todo.description)}>&times;</button>
                </div>
              
              
                <div className="modal-body">
                  <input type='text' className='form-control' value={description} onChange={e => setDescription(e.target.value)}></input>
                </div>
              
              
                <div className="modal-footer">
                  <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={() => editText(todo.todo_id)}>Edit Here</button>
                  <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => setDescription(todo.description)}>Close</button>
                </div>
              
              </div>
            </div>
          </div>
        </Fragment>
    )
}

export default EditTodo;


// Bootstrap 4 modal W3Schools