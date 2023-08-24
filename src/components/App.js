import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
console.log({ TASKS });

function App() {
  const [tasksToDisplay, setTasks] = useState(TASKS);

  function handleDeleteTask(taskToDelete){
    //console.log(taskToDelete);
    setTasks(tasksToDisplay.filter((currentTask)=>{return tasksToDisplay.indexOf(currentTask)!= taskToDelete}))
  }

  function handleFilterTask(categoryToDisplay){
    if(categoryToDisplay==="All"){
      setTasks(TASKS)
    } else{
      setTasks(TASKS.filter((currentTask)=>{return(currentTask.category === categoryToDisplay)}))
    }
  }

  function handleNewTask(newTask){
    setTasks([...tasksToDisplay, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter handleFilterTask={handleFilterTask} categories={CATEGORIES}/>
      <NewTaskForm onTaskFormSubmit={handleNewTask} categories={CATEGORIES}/>
      <TaskList handleDeleteTask={handleDeleteTask} tasks={tasksToDisplay}/>
    </div>
  );
}

export default App;
