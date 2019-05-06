import React, { Component } from 'react';
import IdeaMemberList from '../../components/ideaMemberComponents/IdeaMemberList';
import IdeaMemberAdd from '../../components/ideaMemberComponents/IdeaMemberAdd';

class IdeaMembers extends Component {
  render() {
    return (
      <div>
        <h2>Idea-Member List</h2>
        <IdeaMemberAdd />
        <IdeaMemberList />
      </div>
    );
  }
}

export default IdeaMembers;