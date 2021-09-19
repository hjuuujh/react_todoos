import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    render() {
        const { text, checked, date, id, onRemove } = this.props;
        return (
            <div className="todo-item" >
                <div className="remove" onClick={(e) => {
                e.stopPropagation(); 
                onRemove(id);}
                }>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                <div>{text}</div>
                <div>{date}</div>
                </div>
                
            </div>
        );
    }
    // {        checked && (<div className="check-mark">✓</div>)    }
}

export default TodoItem;