import React, { Component } from 'react';
import CommentEdit from "../../components/commentComponents/CommentEdit";


export default class CommentEditView extends Component {

  render() {
    return (
      <div>
        <h2>Comment Edit View</h2>
        <CommentEdit id={this.props.match.params.id} />
      </div>
    );
  }
}
