import React, { Component } from 'react';
import moment from 'moment';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.props.onToggle(this.props.id);
  }
  render() {
    const {text, completed, createdAt, completedAt} = this.props;
    const renderDate = () => {
      let message = 'Created '
      let timeStamp = createdAt;
      
      if(completed) {
        message = 'Completed ';
        timeStamp = completedAt;
      }
      
      return message + moment.unix(timeStamp).format('MMM DD, YY @ HH:mm');
    }
    return (
      <div onClick={this.handleClick}>
        <input type="checkbox" checked={completed} readOnly />
         <span> {text} </span>
        <p> {renderDate()} </p>
      </div>  
    )
  }
}
