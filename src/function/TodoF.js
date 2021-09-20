import React from 'react';
import '../css/Todo.css';
import TodoListF from './TodoListF';
import NewTodoF from './NewTodoF';

function TodoF(props) {
    return (
        <div>
                <main className="todo-list-template">
                  <div className="title">
                    오늘 할 일
                  </div>
                  <section className="form-wrapper">
                  <NewTodoF value={props.value} 
                    onKeyPress={props.onKeyPress}
                    onChange={props.onChange}
                    onCreate={props.onCreate}/>
                  </section>
                  <section className="todos-wrapper">
                  <TodoListF todos={props.todos} onRemove={props.onRemove}/>
                  </section>
                </main>
            </div>
    );
}

export default TodoF;
