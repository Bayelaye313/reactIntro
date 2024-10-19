import React, { useState } from "react";

function TodoEditForm({ editTask, sametask }) {
  const [task, setTask] = useState(sametask.task);
  const handleSubmit = (e) => {
    e.preventDefault();

    editTask(sametask.id, task);
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name=""
        onChange={(e) => setTask(e.target.value)}
        value={task}
        className="todo-input"
        placeholder="can always update!"
      />
      <button type="submit" className="todo-btn">
        update Task
      </button>
    </form>
  );
}

export default TodoEditForm;
