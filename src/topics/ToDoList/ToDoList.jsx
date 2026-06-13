import { useState } from "react";

function ToDoList() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    function AddTask(e) {
        e.preventDefault();

        if (task.trim() === "") return;

        setTasks([...tasks, task]);
        setTask("");
    }

    return (
        <>
            <h2>To Do List</h2>

            <form>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter Task"
                />

                <button type="submit" onClick={AddTask}>
                    Add Task
                </button>
            </form>

            <h3>Task List</h3>

            <ul>
                {tasks.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default ToDoList;