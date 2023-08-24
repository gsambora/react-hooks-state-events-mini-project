import React from "react";

function CategoryFilter({handleFilterTask, categories}) {
  //console.log(data.data);
  function handleClick(event){
   // console.log(event.target.parentNode.querySelector(".selected"))
    if(event.target.parentNode.querySelector(".selected") != null){
      event.target.parentNode.querySelector(".selected").classList.remove("selected")
    }
    event.target.classList.add("selected")
    handleFilterTask(event.target.textContent)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories && categories.map((category)=>{
        //console.log(category);
        return(
        <button key={categories.indexOf(category)} 
                onClick={handleClick}>{category}</button>
        )
      })}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
