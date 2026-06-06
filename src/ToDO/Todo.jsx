import { useState } from "react";

function Todo() {
    
    const [task, setTask] = useState('')
    const [todo, setTodo] = useState([])

    const addTask = () => {
        setTodo([...todo, { id: Date.now(), name: task }])
        setTask('')
    }

    const deleteTask = (id) => {
        setTodo(todo.filter((task) => task.id !== id))
    }

    return (
        <>
            <h1>Todo List</h1>
            <br />
            <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} />
            <button onClick={addTask}>Add Task</button>
            <br />
            
            {
                todo.map((t) => 
                    <div key={t.id}>
                        <h2>{t.name}</h2>
                        <button onClick={() => deleteTask(t.id)}>Delete</button>
                    </div>
                )
            }
        </>
    );
}

export default Todo;
