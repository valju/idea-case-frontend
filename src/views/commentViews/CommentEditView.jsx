import React, { Component } from 'react';
import CommentEdit from "../../components/commentComponents/CommentEdit";


export default class CommentEditView extends Component {

  render() {
    return (
      <div>
        <h2>Comment Edit View</h2>
        <CommentEdit ideaId={this.props.match.params.ideaId}
          memberId={this.props.match.params.memberId}
          commentTimeStamp={this.props.match.params.commentTimeStamp} />
      </div>
    );
  }
}
