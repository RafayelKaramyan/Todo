import { useState } from "react";
import "./App.css"
import TodoFooter from "./TodoFooter";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import TodoSearch from "./TodoSearch";

 function App() {
  const defaultData = [
    {
    id:Math.random(),
    text: "Hello JS",
    isCompleted: false
    },
    {
      id:Math.random(),
      text: "Learn CSS",
      isCompleted: false
    },
    {
id:Math.random(),
text:"Bye React",
isCompleted: false
    }
  ]
  const [todos, setTodos] = useState(defaultData);
  return (
    <div className="App">
      <header>
        <h1 className="todoApptitle">todo</h1>
      </header>
      <TodoForm 
     
       onAdd={(text) => {
        if(text === ""){
          return
        } 
        setTodos([
          ...todos,
          {
            id: Math.random(),
            text: text,
            isCompleted: false
          }
        ]);

      }
      }/>
      <TodoSearch

 onSearch={(text)  => {
  console.log(todos,"todosssss");


  if(!text){
  console.log(text,"textttttttt")
    setTodos([...defaultData])
  }else{
    const filteredData = todos.filter((item)=> item.text === text);
  

    setTodos([
      ...filteredData,
    ]);
  }


}}
      />
     <TodoList  
     todos={todos}
     onDelete={(todo) => {
setTodos(todos.filter((t) => t.id !== todo.id));
     }}
     onChange={(newTodo) => {
setTodos(todos.map((todo) => {
  if(todo.id === newTodo.id) {
    return newTodo;
  }
  return todo;
}));
     }} 
     />
     <TodoFooter todos={todos} onClearCompleted={() =>{
       setTodos(todos.filter((todo) => !todo.isCompleted));
       }}/>
      </div>
  );

}

export default App;