import React, { Component } from 'react';

export default class TodoSearch extends Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
  }
  
  handleSearch() {
    const showCompleted = this.refs.showCompleted.checked;
    const searchText = this.refs.searchText.value;
    
    this.props.onSearch(showCompleted, searchText);
  }
  
  render() {
    return(
      <div className="todo-container__header">
        <div>
          <input className="form-control" type="search" ref="searchText" placeholder="Search Todos" onChange={this.handleSearch}/>
        </div>
        <div className="checkbox text-center">
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch} /> 
            <span className="text-primary">Show completed todos</span>
          </label>
        </div>
      </div>  
    ) 
  }
}