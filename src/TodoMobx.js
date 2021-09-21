import React from 'react';
import TodoM from './mobx/TodoM';
import TodoCalendarM from './mobx/TodoCalendarM';


function TodoMobx(props) {
    
    return (
        <div>
            <TodoCalendarM />
            <TodoM />
        </div>
    );
}

export default TodoMobx;