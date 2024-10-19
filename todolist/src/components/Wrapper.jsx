import React, { useEffect, useState } from "react";
import TodoForm from "./todoForm";
import Todo from "./todo";
import { v4 as uuidv4 } from "uuid";
import TodoEditForm from "./todoEditForm";

function Wrapper() {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("todos")) || [];
    if (savedTasks) {
      setTodos(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task) => {
    const newTodos = [
      ...todos,
      { id: uuidv4(), task: task, completed: false, isEditing: false },
    ];
    setTodos(newTodos);
  };
  const toggleStatus = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const editTask = (id, task) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done !</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <TodoEditForm key={todo.id} sametask={todo} editTask={editTask} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            toggleStatus={toggleStatus}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
}

export default Wrapper;
