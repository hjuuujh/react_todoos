import '../../../css/newTodo.css';
import { observer } from 'mobx-react';
import TodoStore from '../TodoStore';
import React, { Component } from 'react';

class NewTodoM extends Component {
    store = TodoStore;

    render() {
        return (
            <div>
                <div className="form">
                <input value={this.store.input} onChange={this.store.handleChange} onKeyPress={this.store.handleKeyPress}/>
                <div className="create-button" onClick={this.store.handleCreate}>
                    추가
                </div>
                </div>
        </div>
        );
    }
}

export default observer(NewTodoM);