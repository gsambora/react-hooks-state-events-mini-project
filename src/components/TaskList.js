import React, {useState} from "react";
import Task from "./Task";

function TaskList( {handleDeleteTask, tasks} ) {

  function onDeleteTask(event){
    //console.log(event.target.value)
    handleDeleteTask(event.target.value)
  }

  return (
    <div className="tasks">
      {tasks && tasks.map((task)=>{
        return(
        <Task onDeleteTask = {onDeleteTask}
              key={tasks.indexOf(task)}
              category={task.category}
              text={task.text}
              index={tasks.indexOf(task)}/>
        )
      })}
    </div>
  );
}

export default TaskList;
