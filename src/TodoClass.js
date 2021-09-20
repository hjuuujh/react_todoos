import React, { Component } from 'react';
import Todo from './component/Todo';
import TodoCalendar from './component/TodoCalendar';

class TodoClass extends Component {
    constructor(props) {
        super(props);
        let day = new Date();
        let date = day.getMonth()+1 + "/" + day.getDate();
    
        this.state={
          date:date,
          input: '',
          todos: [
            { id: 0, text: ' 리액트 소개', checked: false, date:"9/15"},
            { id: 1, text: ' 리액트 설치', checked: false, date:"9/15"},
            { id: 2, text: ' 리액트 이론', checked: false, date:"9/20"}
          ],
          filtertodos: [  ]
        }
      }
    
      handleChange = (e) => {
        this.setState({
          input: e.target.value 
        });
      }
    
      handleCreate = () => {
        const { input, filtertodos, todos } = this.state;
    
        this.setState({
          input: '', 
          todos: todos.concat({
            id: todos[todos.length-1].id+1,
            text: input,
            checked: false,
            date:this.state.date
          }),
          filtertodos: filtertodos.concat({
            id: todos[todos.length-1].id+1,
            text: input,
            checked: false,
            date:this.state.date
          })
        });
      }
    
      handleKeyPress = (e) => {
        if(e.key === 'Enter') {
          this.handleCreate();
        }
      }
    
      handleRemove = (id) => {
        const { todos, filtertodos } = this.state;
        this.setState({
          todos: todos.filter(todo => todo.id !== id),
          filtertodos: filtertodos.filter(todo => todo.id !== id)
        });
      }
    
      filterTodos = (day) =>{
        let setdate = day.getMonth()+1 + "/" + day.getDate();
        this.setState({
          date:setdate
        });
    
        let filtered = (this.state.todos).filter(function(element){
          return element.date === setdate;
        });
    
        this.setState({
          filtertodos: filtered
        })
      }

    render() {
        const { input, filtertodos } = this.state;
        return (
            <div>
                <TodoCalendar filterTodos={this.filterTodos} />

                <Todo todos={filtertodos} 
                value={input} 
                onKeyPress={this.handleKeyPress}
                onChange={this.handleChange}
                onCreate={this.handleCreate} 
                onRemove={this.handleRemove}
                filterTodos={this.filterTodos}
                date={this.date}/>        
            </div>
        );
    }
}

export default TodoClass;