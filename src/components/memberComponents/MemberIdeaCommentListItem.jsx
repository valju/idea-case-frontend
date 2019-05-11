import React, { Component } from "react";
import MemberIdeaCommentItem from "./MemberIdeaCommentItem";

export default class MemberIdeaCommentListItem extends Component {
  render() {
    
    return (
      <li>
        <MemberIdeaCommentItem item={this.props.item} />
       
      </li>
    );
  }
}
