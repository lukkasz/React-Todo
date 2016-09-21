import React, { Component } from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';

export default class App extends Component {
  constructor() {
    super();
    
    this.state =  {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog'
        },
        {
          id: uuid(),
          text: 'Clean house'
        },
        {
          id: uuid(),
          text: 'Take the trash'
        }
      ]
    };
    
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  
  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos, 
        {
          id: uuid(),
          text: text
        }
      ]
    })
  }
  
  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted, 
      searchText: searchText.toLowerCase()
    })
  }
  
  render() {
    const {todos} = this.state;
    
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos}/>
        <AddTodo onAddTodo = {this.handleAddTodo}/>
      </div>
    );
  }
}
