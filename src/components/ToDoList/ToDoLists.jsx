import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="Nueva tarea..."
      />
      <button onClick={addTask}>Agregar</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.text}
            <button onClick={() => toggleTask(index)}>✅</button>
            <button onClick={() => removeTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
