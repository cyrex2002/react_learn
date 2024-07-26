import { useState } from "react";

function ToDoComponent(){
    const [Tasks, setTasks] = useState([]);
    
    function handleTask(event){
    }

    function addTask(){

    }

    return(
        <>
        <h1>To-Do-List</h1>
        <div>
            <input type="text"/>
            <button>Add task</button>
        </div>
        <ol>
            <li>
            </li>
        </ol>
        </>
        
    );
}

export default ToDoComponent;