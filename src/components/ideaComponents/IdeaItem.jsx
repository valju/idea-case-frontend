import React, { Component } from 'react';

export default class IdeaItem extends Component {

  render() {
    return (
      <div>
        <p> Idea: {this.props.item.name} </p>
        <p> Description: {this.props.item.description} </p>
        <p> Budget: {this.props.item.budget} euros </p>
        <p> People Needed: {this.props.item.peopleNeeded} </p>
        <p> Ready for comments: {this.props.item.readyForComments} </p>
        <p> Creation Date: {this.props.item.creationDate} </p>
        <p> CategoryID: {this.props.item.categoryId} </p>
      </div>
    );
  }
}