import React, { Component } from 'react';

export default class AddTodo extends Component {
  
  constructor(props) {
    super(props);
    this.onFromSubmit = this.onFromSubmit.bind(this);
  }
  
  onFromSubmit(e) {
    
    e.preventDefault();
    
    const todoText = this.refs.todoText.value;
    
    if (todoText.length > 0) {
    
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    
    } else {
      
      this.refs.todoText.focus();
    
    }
    
  }
  
  render() {
    return (
      <div className="todo-cotainer__footer">
        <form onSubmit={this.onFromSubmit}>
          <div>
            <input className="form-control" type="text" ref="todoText" placeholder="What do you need to do?" />
          </div>
          <div>
            <button className="btn btn-block btn-success" type="submit">Add Todo</button>
          </div>
        </form>
      </div>  
    )
  }
}