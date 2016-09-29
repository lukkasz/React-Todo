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
    const todoClassName = completed ? 'todo todo--completed' : 'todo';
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
      <div className={todoClassName} onClick={this.handleClick}>
        <div className="todo__checkbox">
           <input type="checkbox" checked={completed} readOnly />
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>  
    )
  }
}
