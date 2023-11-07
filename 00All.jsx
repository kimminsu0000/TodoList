import React, { useRef, useState } from "react";
import TodoTemplate from "./01TodoTemplate";
import TodoInsert from "./02TodoInsert";
import TodoList from "./04TodoList";
import './css.css'

function All () {
    const [ todos, setTodos ] = useState([
        {
            id: 1,
            text: 'Todo List 앱 완성하기',
            checked: true,
        },
        {
            id: 2,
            text: '블로그 포스팅하기',
            checked: false,
        },
    ])
    const nextId = useRef(3);
    const onInsert = (text) => {
        const todo = {
            id: nextId.current,
            text,
            checked: false,
        };
        setTodos(todos.concat(todo));
        nextId.current = nextId.current + 1;
    }
    const onRemove = (id) => {
        setTodos(todos.filter(
            todo => todo.id !== id
        ))
    }
    const onToggle = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? {...todo, checked: !todo.checked} : todo,    
        ))
    }
    return (
        <TodoTemplate>
            <TodoInsert
                onInsert = {onInsert}
            />
            <TodoList
                todos = {todos}
                onRemove = {onRemove}
                onToggle = {onToggle}
            />
        </TodoTemplate>
    )
}

export default All;