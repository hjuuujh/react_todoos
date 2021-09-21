import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function TodoCalendarF(props) {
    const [date, setDate] = useState(new Date());
    useEffect(() => {props.filterTodos(date)},[date]);

    // const onChange = (date) => {
    //     setDate(date); 
    //     // filterTodos(date);
    //   }

    return (
        
        <div>
            <Calendar
                value={date}    
                onp
                onClickDay={(date) =>setDate(date)}
                />
        </div>
    );
}

export default TodoCalendarF;