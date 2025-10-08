import React from "react";
import "../styles/Tasks.css";

function TaskCard({ task }) {
  return (
    <div className={`task-card ${task.status}`}>
      <h4>{task.task}</h4>
      <p>Due: {task.dueDate}</p>
      <p>Status: {task.status}</p>
    </div>
  );
}

export default TaskCard;
