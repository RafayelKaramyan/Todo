import TodoItem from "./TodoItem";
import "./App.css"
function TodoList({todos, onDelete,onChange}) {
  return (
    <div>
      {
        todos.map((todo) => {
          return (
            <TodoItem 
            key ={todo.id}
            todo={todo}
            onChange={onChange}
            onDelete={onDelete} />
            //<div key = {todo.id}>{todo.text}</div>
          )
        })
      }
      </div>
  )
}
export default TodoList;