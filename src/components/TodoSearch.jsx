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
      <div>
        <div>
          <input className="form-control" type="search" ref="searchText" placeholder="Search Todos" onChange={this.handleSearch}/>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch} /> text 
          </label>
        </div>
      </div>  
    ) 
  }
}