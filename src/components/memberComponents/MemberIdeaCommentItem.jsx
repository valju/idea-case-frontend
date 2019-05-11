import React, { Component } from "react";

export default class MemberIdeaCommentItem extends Component {
  render() {
  
    return (
      <span>
        {`Comments: ${this.props.item.commentText},  
          Idea : ${this.props.item.name}`}
      </span>
    );
  }
}
