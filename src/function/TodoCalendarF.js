import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function TodoCalendarF(props) {
    const [date, setDate] = useState(new Date());
    useEffect(() => {props.filterTodos(date)},[date])
    // props.filterTodos(date);

    const onChange = (filterTodos, date) => {
        setDate(date); 
        filterTodos(date);
      }


    return (
        <div>
            <Calendar
                value={date}    
                onp
                onClickDay={(date) =>onChange(props.filterTodos, date)}
                />
        </div>
    );
}

export default TodoCalendarF;