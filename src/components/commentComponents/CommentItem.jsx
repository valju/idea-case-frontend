import React, { Component } from 'react';
import Moment from 'moment';

export default class CommentItem extends Component {

  formatTimeStamp = (timeStamp) => {
    let time = Moment(timeStamp).format("DD/MM/YYYY HH:MM")
    return time;
  }

  render() {
    return (
      <div>
        <p>{this.formatTimeStamp(this.props.item.commentTimeStamp)} {this.props.item.firstName} {this.props.item.lastName}:</p>
        <p>{this.props.item.commentText}</p>
      </div>
    );
  }
}