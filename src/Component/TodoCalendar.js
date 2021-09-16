import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class TodoCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          date: new Date()
        };
        props.filterTodos(this.state.date);
      }

onChange = (filterTodos, date) => {
    this.setState({ selectedDate: date, date:date }); 
    filterTodos(date);
  }

    render() {
        const { filterTodos} = this.props;
        return (
            <div>
                <Calendar
                value={this.state.date}    
                onp
                onClickDay={(date) =>this.onChange(filterTodos, date)}
                />
            </div>
        );
    }
}

export default TodoCalendar;