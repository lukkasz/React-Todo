import React, { Component } from 'react';

export default class Todo extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {id, text} = this.props;
    return (
      <div>
        {id}. {text}
      </div>  
    )
  }
}