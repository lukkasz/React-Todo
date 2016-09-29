import React, { Component } from 'react';
import Todo from 'Todo';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {todos} = this.props; 
    const renderTodos = () => {
      
      if (todos.length === 0) {
        return (<p className="todo-container__message">Nothing To Do</p>);
      }
      
      return todos.map((todo) => {
          return (
            <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>  
          )
      })
      
    }
    
    
    return (
      <div>{renderTodos()}</div>  
    )
  }
}