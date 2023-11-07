import React, { useState } from "react";

function TodoInsert ({onInsert}) {
    const [ value, setValue ] = useState('');
    const onChange = (e) => {
        setValue(e.target.value)
    }
    const onSubmit = (e) => {
        onInsert(value);
        setValue('');
        e.preventDefault();
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                className=""
                placeholder="Todo 입력"
                value={value}
                onChange={onChange}
            />
            <button
                className="addBtn"
                type="submit"
            >
                <span>추가</span></button>
        </form>
    )
}

export default TodoInsert;