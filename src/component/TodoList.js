import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        const { todos, onRemove } = this.props;
        const todoList = todos.map((todo) => {
            return (
                <TodoItem id={todo.id}
                text={todo.text}
                checked={todo.checked}
                date={todo.date}
                onRemove={onRemove}
                key={todo.id}/>
            )
        });
        return (
            <div>
                {todoList}  
            </div>
        );
    }
}

export default TodoList;