import React, { Component } from 'react';
import IdeaMemberList from '../../components/ideaMemberComponents/IdeaMemberList';

class IdeaMembers extends Component {
  render() {
    return (
      <div>
        <h2>Idea-Member List</h2>
        <IdeaMemberList />
      </div>
    );
  }
}

export default IdeaMembers;