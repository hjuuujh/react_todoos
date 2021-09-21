import React, { Component } from 'react';
import '../css/Todo.css';
import TodoListM from './TodoListM';
import NewTodoM from './NewTodoM';
import { observer } from 'mobx-react';

class TodoM extends Component {
  render() {
    return (
      <div>
        <div>
                <main className="todo-list-template">
                  <div className="title">
                    오늘 할 일
                  </div>
                  <section className="form-wrapper">
                  <NewTodoM/>
                  </section>
                  <section className="todos-wrapper">
                  <TodoListM/>
                  </section>
                </main>
            </div>
      </div>
    );
  }
}

export default observer(TodoM);