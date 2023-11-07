import React from "react";

function TodoListItem (props) {
    const { id, text, checked } = props.todo;
    return (
        <div className="listWrap">
            {!checked
                ? <div className="textDefault">{text}</div>
                : <div className="textCheck">{text}</div>
            }
            <div className="btnWrap">
                {checked 
                    ? <div className="checkboxChecked" onClick={() => props.onToggle(id)}></div> 
                    : <div className="checkboxDefault" onClick={() => props.onToggle(id)}></div> }
                <button 
                    className="btnDelete" 
                    onClick={() => props.onRemove(id)}
                >삭제</button>
            </div>
        </div>
    )
}

export default TodoListItem;