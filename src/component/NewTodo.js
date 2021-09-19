import React, { Component } from 'react';
import './newTodo.css';

class NewTodo extends Component {
    render() {
        const {value, onChange, onCreate, onKeyPress} = this.props;
        return (
            <div>
                <div className="form">
                <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
                <div className="create-button" onClick={onCreate}>
                    추가
                </div>
                </div>
            </div>
        );
    }
}

export default NewTodo;