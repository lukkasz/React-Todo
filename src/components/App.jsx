import React, { Component } from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import TodoAPI from 'TodoAPI'

export default class App extends Component {
  constructor() {
    super();
    
    this.state =  {
      showCompleted: false,
      searchText: '',
      todos: []
    };
    
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  
  componentDidMount() {
    this.setState({
      todos: TodoAPI.getTodos()
    })
  }
  
  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos);
  }
  
  handleAddTodo(text) {
    console.log(moment().unix());
    this.setState({
      todos: [
        ...this.state.todos, 
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
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
  
  handleToggle(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
    });
    
    this.setState({
      todos: updatedTodos
    })
  }
  
  render() {
    const {todos, showCompleted, searchText} = this.state;
    const filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    
    return (
      <div className="col-md-6 col-md-offset-3">
        <h1 className="text-center">Todo App</h1>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={filterTodos} onToggle = {this.handleToggle}/>
        <AddTodo onAddTodo = {this.handleAddTodo} />
      </div>
    );
  }
}
