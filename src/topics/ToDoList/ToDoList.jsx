import { useState } from "react";

function ToDoList(){

    const [task , setTask] = useState("");
    const [tasks , setTasks] = useState[];

    function AddTask(){
        if(task.trim() === "") return;

        setTask([...tasks, task])
    }

    return(
        <>

        <h2>To Do List</h2>

        <form action="">
            <input type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter Task"
            />
            <button onClick={AddTask}>Add Task</button>
        </form>
        </>
    )
}

export default ToDoList;