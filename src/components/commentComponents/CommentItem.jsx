import React, { Component } from 'react';
import Moment from 'moment';
import { Link } from "react-router-dom";

export default class CommentItem extends Component {

  formatTimeStamp = (timeStamp) => {
    let time = Moment(timeStamp).format("DD/MM/YYYY HH:mm")
    return time;
  }

  render() {
    return (
      <div>
        <p>{this.formatTimeStamp(this.props.item.commentTimeStamp)} {this.props.item.firstName} {this.props.item.lastName}:</p>
        <p>{this.props.item.commentText}
          &nbsp;
        <Link to={`/comment_edit/${this.props.item.id}`}>Edit</Link>
          &nbsp;
        <button type="button" onClick={() => this.props.deleteComment(this.props.item)}>Delete</button></p>
      </div>
    );
  }
}