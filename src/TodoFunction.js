import React, { useState } from 'react';
import TodoF from './function/TodoF';
import TodoCalendarF from './function/TodoCalendarF';

function TodoFunction(props) {
    const [date, setDate] = useState((new Date()).getMonth()+1 + "/" + (new Date()).getDate());
    const [input, setInput] = useState(' ');
    const [id, setId] = useState(0);
    const [todos, setTodos] = useState([
        { id: 0, text: ' 리액트 소개', date:"9/15"},
        { id: 1, text: ' 리액트 설치', date:"9/15"},
        { id: 2, text: ' 리액트 이론', date:"9/20"}
      ]);
    const [filteredtodos, setFilteredtodos] = useState([]);

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleCreate = () => {
        setId(todos[todos.length-1].id+1);
        setInput(input);
        setDate(date);
        setTodos(todos.concat({
            id: id,
            text: input,
            date:date
          }));
        setFilteredtodos(filteredtodos.concat({
            id: id,
            text: input,
            date:date
          }));
          setInput('');
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            handleCreate();
        };
    }

    const handleRemove = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
        setFilteredtodos(filteredtodos.filter(todo => todo.id !== id));
    }

    const filterTodos = (day) => {
        let clickedDate = day.getMonth()+1 + "/" + day.getDate();
        setDate(clickedDate);

        let filtered = (todos).filter(function(element){
            return element.date === clickedDate;
          });
          setFilteredtodos(filtered);
    }

    return (
        <div>
            <TodoCalendarF filterTodos={filterTodos} />

            <TodoF todos={filteredtodos} 
            value={input} 
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate} 
            onRemove={handleRemove}
            filterTodos={filterTodos}
            date={date}/> 
        </div>
    );
}

export default TodoFunction;