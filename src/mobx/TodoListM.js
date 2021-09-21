import React, { Component } from 'react';
import todoStore from './TodoStore';
import { observer } from 'mobx-react';
import TodoItemM from './TodoItemM';

class TodoListM extends Component {
    store = todoStore;

    render() {
        const {filteredtodos} = this.store;
        const todoList = filteredtodos.map((todo) => {
            return (
                <TodoItemM   key={todo.id} todo={todo}/>
            )
        });
        return (
            <div>
            {todoList} 
        </div>
        );
    }
}

export default observer(TodoListM);