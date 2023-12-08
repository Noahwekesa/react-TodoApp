import React from "react";

//'todo' an object represetting a todo item
//toggleComplete - completion status of a todo
//removeTodo - remove a todo
const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <div className={`todo ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <p>{todo.text}</p>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </div>
  );
};

export default TodoItem;
