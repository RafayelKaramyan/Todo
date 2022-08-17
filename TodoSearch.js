import { useState } from "react";
import "./TodoForm.css"
function TodoSearch({onSearch}) {


return (
   <form className="todoAppForm">
   <input 
    className="todoInput"
    onChange={(e) => {
    onSearch(e.target.value);
}}
   >
   </input> 
   <button className="todoAppAddButton">search</button>
</form>

)}

export default TodoSearch
