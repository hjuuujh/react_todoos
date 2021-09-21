import React from 'react';
import '../css/newTodo.css';

function NewTodoF(props) {
    return (
        <div>
                <div className="form">
                <input value={props.value} onChange={props.onChange} onKeyPress={props.onKeyPress}/>
                <div className="create-button" onClick={props.onCreate}>
                    추가
                </div>
                </div>
        </div>
    );
}

export default NewTodoF;