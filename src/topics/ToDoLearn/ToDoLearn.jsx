import { useState } from "react";

const ToDoLearn = () => {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    function taskUpdate(e) {
        e.preventDefault();

        if (task.trim() === "") return;

        setTaskList([...taskList, task]);
        setTask("");
    }

    return (
        <>
            <h2>To Do List</h2>

            <form onSubmit={taskUpdate}>
                <input
                    type="text"
                    placeholder="Enter Task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />

                <button type="submit">Submit</button>
            </form>

            <ul>
                {taskList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
};

export default ToDoLearn;