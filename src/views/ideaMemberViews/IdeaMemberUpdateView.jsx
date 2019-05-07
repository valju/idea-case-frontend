import React, { Component } from 'react';
import IdeaMemberUpdate from '../../components/ideaMemberComponents/IdeaMemberUpdate';

class IdeaMemberUpdateView extends Component {
  render() {
    return (
      <div>
        <h2>Update Idea-Member</h2>
        <IdeaMemberUpdate ids={this.props.match.params} />
      </div>
    );
  }
}

export default IdeaMemberUpdateView;