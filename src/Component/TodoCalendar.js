import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class TodoCalendar extends Component {
    constructor() {
        super();
        this.state = {
          date: new Date()
        };
      }

onChange = (filterTodos, date) => {
    this.setState({ selectedDate: date }); 
    filterTodos(date);
  }

    render() {
        const { filterTodos} = this.props;
        return (
            <div>
                <Calendar
                value={this.state.date}    
                onClickDay={(date) =>this.onChange(filterTodos, date)}
                />
            </div>
        );
    }
}

export default TodoCalendar;