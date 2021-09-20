import React, { Component } from 'react';
import TodoClass from './TodoClass';
import TodoFunction from './TodoFunction';

class App extends Component {

  render() {
    
    return (
      <div>
        <TodoClass />
        <TodoFunction />
      </div>
    );
  }
}

export default App;