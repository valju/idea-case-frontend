import React, { Component } from 'react';

class IdeaMemberItem extends Component {
  render() {
    const { firstName, lastName, name } = this.props.item
    return (
      <div>
        Idea "{name}" of member {firstName} {lastName} 
      </div>
    );
  }
}

export default IdeaMemberItem;