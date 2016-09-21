import React, { Component } from 'react';
import TodoList from 'TodoList';

export default class App extends Component {
  constructor() {
    super();
    this.state =  {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean house'
        },
        {
          id: 3,
          text: 'Take the trash'
        }
      ]
    }
  }
  render() {
    const {todos} = this.state;
    
    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    );
  }
}
