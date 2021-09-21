import React from 'react';
import TodoItemF from './TodoItemF';

function TodoListF(props) {
    const todoList = props.todos.map((todo) => {
        return (
            <TodoItemF id={todo.id}
            text={todo.text}
            date={todo.date}
            onRemove={props.onRemove}
            key={todo.id}/>
        )
    });
    return (
        <div>
            {todoList} 
        </div>
    );
}

export default TodoListF;