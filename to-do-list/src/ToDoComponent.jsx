import { useState,useEffect } from "react";

function TodoList() {
  const [taskList, setTaskList] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  function handleTaskInput(event) {
    setTaskInput(event.target.value);
  }

  function addTask() {
    if(taskInput.trim() !== ""){
    setTaskList(t => [...t, taskInput]);
    setTaskInput("");
    }
  }

  function deleteTask(index){
    const updatedTaskList = taskList.filter((task, i) => i !== index);
    setTaskList(updatedTaskList);

  }
  function moveUp(index){
    
    if(index>0){
      const updatedTaskList = [...taskList]; 
      [updatedTaskList[index-1], updatedTaskList[index]] =
      [updatedTaskList[index], updatedTaskList[index-1]]; //swapping
      setTaskList(updatedTaskList); 
    }
    

  }

  function moveDown(index){
    if(index<taskList.length-1){
      const updatedTaskList = [...taskList]; 
      [updatedTaskList[index], updatedTaskList[index+1]] =
      [updatedTaskList[index+1], updatedTaskList[index]]; //swapping
      setTaskList(updatedTaskList); 
    }

  }

  return (
    <>
    <div className="container">
      <h1>To-Do-List</h1>
      <div className="input-conatiner">
        <input 
            className="input"
            type="text" 
            placeholder="Add a task"
            value={taskInput}
            onChange={handleTaskInput} 
        />
        <button className="add-button"
                 onClick={addTask}>Add task</button>
      </div>
      <ol className="list">
        {taskList.map((task, index) => (
          <li key={index}>
            <span className="list-text">{task}</span>
            <button 
              className="move-button"
              onClick={() => moveUp(index)}            
            >👆</button>
            <button 
              className="move-button"
              onClick={() => moveDown(index)}            
            >👇</button>
            <button 
              className="delete-button"
              onClick={() => deleteTask(index)}            
            >delete</button>
          </li>
        ))}
      </ol>
      </div>  
    </>
  );
}


export default TodoList;