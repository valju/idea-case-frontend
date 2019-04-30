import React, { Component } from 'react';
import IdeaUpdate from '../../components/ideaComponents/IdeaUpdate';


export default class IdeaUpdateView extends Component {

  render() {
    return (
      <div>
        <h2>Update idea</h2>
        <IdeaUpdate idea={this.props.location.state.idea} />
      </div>
    );
  }
}