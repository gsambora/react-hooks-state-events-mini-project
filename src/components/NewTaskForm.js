import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("Code");

  function handleSubmit(event){
    event.preventDefault();
    console.log(category);
    const formData = {text:details, category:category};
    onTaskFormSubmit(formData);

    setDetails("");
    setCategory("Code");
  }

  function handleDetails(event){
    setDetails(event.target.value);
  }

  function handleCategory(event){
    setCategory(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={details} onChange={handleDetails}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategory}>
          {categories && categories.map((category)=>{
            if(category != "All"){
              return <option key={category}>{category}</option>
            }})
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
