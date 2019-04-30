import React, { Component } from "react";
import IdeaUpdate from "../../components/ideaComponents/IdeaUpdate";

export default class IdeaUpdateView extends Component {
  render() {
    return (
      <div>
        <h2>Update idea</h2>
        <p>
          Idea id digged out of react-router-dom params:{" "}
          {this.props.match.params.id}
        </p>
        <IdeaUpdate
          ideaId={this.props.match.params.id}
          idea={this.props.location.state}
        />
      </div>
    );
  }
}
