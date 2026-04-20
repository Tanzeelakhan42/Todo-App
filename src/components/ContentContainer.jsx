import React from "react";
import TodoContent from "./TodoContent";
import "./styles/content-container.styles.css";

export const ContentContainer = () => {
  return (
    <div className="content-container">
      <h1>Todoie App</h1>
      <TodoContent />
    </div>
  );
};

export default ContentContainer;
