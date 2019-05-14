import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MemberIdeaCommentItem extends Component {

  render() {
    const { commentTimeStamp, commentText, name, id } = this.props.item;
    return (
      <span>
        On {commentTimeStamp}, The idea- <Link to={"/Idea/" + id}>
          {name}
        </Link>, has been commented as- <br />"{commentText}"
        </span>
    );
  }
}
