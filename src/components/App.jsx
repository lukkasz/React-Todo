import React, { Component } from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

export default class App extends Component {
  constructor() {
    super();
    
    this.state =  {
      showCompleted: false,
      searchText: '',
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
    };
    
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  
  handleAddTodo(text) {
    console.log('New Todo: ' + text );
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
