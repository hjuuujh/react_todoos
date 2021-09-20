import React from 'react';

function TodoItemF(props) {
    return (
        <div className="todo-item" >
                <div className="remove" onClick={(e) => {
                e.stopPropagation(); 
                props.onRemove(props.id);}
                }>&times;</div>
                <div className={`todo-text`}>
                <div>{props.text}</div>
                <div>{props.date}</div>
                </div>
                
            </div>
    );
}

export default TodoItemF;