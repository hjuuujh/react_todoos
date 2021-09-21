import { observer } from 'mobx-react';
import React, { Component } from 'react';
import todoStore from './TodoStore';

class TodoItemM extends Component {

    render() {
        const {todo} = this.props;
        return (
            <div className="todo-item" >
                <div className="remove" onClick={(e) => {
                e.stopPropagation(); 
                todoStore.todoRemove(todo.id);}
                }>&times;</div>
                <div className={`todo-text`}>
                <div>{todo.text}</div>
                <div>{todo.date}</div>
                </div>
            </div>
        );
    }
}

export default observer(TodoItemM);