import React from "react";
import "../components/styles/todoitem.styles.css";

export const TodoItems = () => {
  return (
    <div className="todo-items">
      <li>
        <div className="todo-item-description">
          <input type="checkbox" />
          <p>Eat</p>
        </div>
        <p>...</p>
      </li>
      <li>
        <div className="todo-item-description">
          <input type="checkbox" />
          <p>Sleep</p>
        </div>
        <p>...</p>
      </li>
      <li>
        <div className="todo-item-description">
          <input type="checkbox" />
          <p>Code</p>
        </div>
        <p>...</p>
      </li>
      <li>
        <div className="todo-item-description">
          <input type="checkbox" />
          <p>Repeat</p>
        </div>
        <p>...</p>
      </li>
    </div>
  );
};
export default TodoItems;
