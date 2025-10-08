import React, { useState, useEffect } from "react";
import { fetchTasks, addTask } from "../api/mockApi";
import TaskCard from "../components/TaskCard";
import "../styles/Tasks.css";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ cropId: 1, task: "", dueDate: "", status: "pending" });

  useEffect(() => { fetchTasks().then(data => setTasks(data)); }, []);
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    await addTask(form);
    fetchTasks().then(data => setTasks(data));
    setShowForm(false);
  };

  return (
    <div className="tasks-container">
      <h2>Tasks</h2>
      <button className="add-btn" onClick={() => setShowForm(!showForm)}>{showForm ? "Cancel" : "Add Task"}</button>
      {showForm && (
        <form className="task-form" onSubmit={handleSubmit}>
          <input name="cropId" type="number" placeholder="Crop ID" value={form.cropId} onChange={handleChange} required />
          <input name="task" placeholder="Task" value={form.task} onChange={handleChange} required />
          <input name="dueDate" type="date" placeholder="Due Date" value={form.dueDate} onChange={handleChange} required />
          <select name="status" value={form.status} onChange={handleChange}>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
          <button type="submit">Save</button>
        </form>
      )}
      <div className="tasks-list">{tasks.length === 0 ? <p>No tasks found.</p> : tasks.map(t => <TaskCard key={t.id} task={t} />)}</div>
    </div>
  );
}
export default Tasks;
