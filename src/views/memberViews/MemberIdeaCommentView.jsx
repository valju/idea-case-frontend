import React, { Component } from 'react';
import MemberDetails from '../../components/memberComponents/MemberDetails';
import MemberIdeaCommentList from '../../components/memberComponents/MemberIdeaCommentList';

class MemberIdeaCommentView extends Component {
  render() {
    return (
      <div>
        <h2> Member Idea + Comment</h2>
        <MemberDetails id={this.props.match.params.id} />
        <MemberIdeaCommentList id={this.props.match.params.id} />
      </div>
    );
  }
}

export default MemberIdeaCommentView;