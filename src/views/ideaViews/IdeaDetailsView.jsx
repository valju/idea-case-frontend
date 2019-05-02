import React, { Component } from 'react';
import IdeaDetails from '../../components/ideaComponents/IdeaDetails';


export default class IdeaDetailsView extends Component {

  render() {
    return (
      <div>
        <h2>Single Idea in detail view</h2>
        <p>Idea id digged out of react-router-dom params: {this.props.match.params.id}</p>
        <IdeaDetails ideaId={this.props.match.params.id}/>
      </div>
    );
  }
}