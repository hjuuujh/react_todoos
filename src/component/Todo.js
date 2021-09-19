import React, { Component } from 'react';
import './Todo.css';
import TodoList from './TodoList';
import NewTodo from './NewTodo';

class Todo extends Component {
    render() {
      const {todos, value, onKeyPress,  onChange, onCreate, onRemove} =this.props;
        return (
            <div>
                <main className="todo-list-template">
                  <div className="title">
                    오늘 할 일
                  </div>
                  <section className="form-wrapper">
                  <NewTodo value={value} 
                    onKeyPress={onKeyPress}
                    onChange={onChange}
                    onCreate={onCreate}/>
                  </section>
                  <section className="todos-wrapper">
                  <TodoList todos={todos} onRemove={onRemove}/>
                  </section>
                </main>
            </div>
        );
    }
}

export default Todo;