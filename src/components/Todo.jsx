import React, { Component } from 'react';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.props.onToggle(this.props.id);
  }
  render() {
    const {text, completed} = this.props;
    
    return (
      <div onClick={this.handleClick}>
        <input type="checkbox" checked={completed} readOnly />
        {text}
      </div>  
    )
  }
}
