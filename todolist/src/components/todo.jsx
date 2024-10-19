import React from "react";
import { Edit2Icon, Trash2Icon } from "lucide-react";

function Todo({ task, deleteTodo, toggleStatus, editTodo }) {
  console.log(task.id);
  return (
    <div className="Todo">
      <p
        onClick={() => toggleStatus(task.id)}
        className={`${task.completed ? "completed" : "incompleted"}`}
      >
        {task.task}
      </p>
      <div className=" icons">
        <Trash2Icon
          className="delete-icon "
          onClick={() => deleteTodo(task.id)}
        />

        <Edit2Icon className="edit-icon " onClick={() => editTodo(task.id)} />
      </div>
    </div>
  );
}

export default Todo;
