import React from "react";

function TodoTemplate ({children}) {
    return (
        <div className='allWrap'>
            <div className='title'>Todo List</div>
            <div>{children}</div>
        </div>
    )
}

export default TodoTemplate;