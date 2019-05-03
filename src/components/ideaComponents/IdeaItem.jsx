import React, { Component } from 'react';

export default class IdeaItem extends Component {

  render() {
    return (
      <div>
        <span> Idea: {this.props.item.name} </span><br />
        <span> Description: {this.props.item.description} </span><br />
        <span> Budget: {this.props.item.budget} euros </span><br />
        <span> People Needed: {this.props.item.peopleNeeded} </span><br />
        <span> Ready for comments: {this.props.item.readyForComments === "1" ? "Yes" : "No"} </span><br />
        <span> Creation Date: {this.props.item.creationDate} </span><br />
        <span> CategoryID: {this.props.item.categoryId} </span>

      </div>
    );
  }
}