import "./TodoItem.css"
function TodoItem({todo, onChange, onDelete}) {
    return (
      <div className="todoListItem">
        <label >
          <input type="checkbox" checked={todo.isCompleted} onChange={(e) => {
            //e.target.checked
            onChange({
              ...todo,
              isCompleted: e.target.checked
            });
          }}/>
          {todo.text}
          </label>
          <button 
          className="todoListItemDelete"
           onClick={() => {
            onDelete(todo); 
          }}>X</button>
          </div>
    )
    }
    export default TodoItem