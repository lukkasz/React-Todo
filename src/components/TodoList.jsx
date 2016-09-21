import React, { Component } from 'react';
import Todo from 'Todo';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const renderTodos = this.props.todos.map((todo) => {
      return (
        <Todo key={todo.id} {...todo} />  
      )
    })
    return (
      <div>{renderTodos}</div>  
    )
  }
}