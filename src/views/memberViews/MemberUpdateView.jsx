import React, { Component } from 'react';
import MemberUpdate from '../../components/memberComponents/MemberUpdate';

class MemberUpdateView extends Component {
  render() {
    return (
      <div>
        <h1>Update Member</h1>
        <MemberUpdate id={this.props.match.params.id} />
      </div>
    );
  }
}

export default MemberUpdateView;