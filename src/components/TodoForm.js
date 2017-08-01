import React from 'react';

const TodoForm = (props)=>{
    return(
        <div>
        <form onSubmit={props.addTask}>
            <h1 id="heading">Todo App</h1>
            <input type="text" id="textfield" value={props.currentTask} onChange={props.updateTask}/>
            <button type="submit" id="submitbutton">Add Task</button>
        </form>
        <button id="removebutton" onClick={()=>{
                props.deleteAll()
                }}>Delete All</button>
        </div>
    );
}

export default TodoForm;