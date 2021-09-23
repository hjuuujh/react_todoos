import React, { Component } from 'react';
import TodoClass from './TodoClass';
import TodoFunction from './TodoFunction';
import TodoMobx from './TodoMobx';

class App extends Component {

  render() {
    
    return (
      <div>
        {/* <TodoClass /> */}
        {/* <TodoFunction /> */}
        <TodoMobx />
      </div>
    );
  }
}

export default App;