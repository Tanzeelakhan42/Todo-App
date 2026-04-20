import React from "react";
import TodoItems from "./TodoItems";
import "./styles/todoContent.styles.css";
import Button from "./Button";

export const TodoContent = () => {
  return (
    <div className="todo-content">
      <h3>Todo</h3>
      <TodoItems />
      <Button />
    </div>
  );
};

export default TodoContent;
