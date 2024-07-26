import { useState } from "react";

function TodoList() {
  const [taskList, setTaskList] = useState([]);

  function handleTaskInput(event) {
    const newTask = event.target.value;
    setTaskList(previousTaskList => [...previousTaskList, newTask]);
    event.target.value = "";
  }

  return (
    <>
      <h1>To-Do-List</h1>
      <div>
        <input type="text" onChange={handleTaskInput} />
        <button>Add task</button>
      </div>
      <ol>
        {taskList.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ol>
    </>
  );
}


export default TodoList;