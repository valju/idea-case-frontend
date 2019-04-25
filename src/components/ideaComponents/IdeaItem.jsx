import React, { Component } from 'react';

export default class IdeaItem extends Component {

  render() {
    return (
      <span>
        {`Idea: ${this.props.item.name}, budget: ${this.props.item.budget} euros, creationDate: ${this.props.item.creationDate}`}
      </span>
    );
  }
}