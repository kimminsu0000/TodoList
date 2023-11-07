import React from "react";
import TodoListItem from "./03TodoListItem";

function TodoList (props) {
    return (
        <div>
            {props.todos.map(todo => (
                <TodoListItem 
                    todo = {todo} 
                    key={todo.id} 
                    onRemove = {props.onRemove}
                    onToggle = {props.onToggle}
                />
            ))}
        </div>
    )
}

export default TodoList;