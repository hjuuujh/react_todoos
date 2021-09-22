import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TodoStore from '../TodoStore';
import { observer } from 'mobx-react';

class TodoCalendarM extends Component {
    store = TodoStore;

    render() {
        return (
            <div>
                <Calendar
                value={this.store.date}    
                onp
                onClickDay={(date) =>this.store.setSelectedDate(date)}
                />
            </div>
        );
    }
}

export default observer(TodoCalendarM);