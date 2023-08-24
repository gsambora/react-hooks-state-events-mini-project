import React from "react";

function Task({onDeleteTask, category, text, index}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button value={index} onClick={onDeleteTask} className="delete">X</button>
    </div>
  );
}

export default Task;
