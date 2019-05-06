import React, { Component } from 'react';


class IdeaMemberItem extends Component {
  render() {
    const { firstName, lastName, name } = this.props.item
    return (
      <div>
        {name} is the idea of {firstName} {lastName} 
        <button>Edit</button>
        <button>Delete</button>
      </div>
    );
  }
}

export default IdeaMemberItem;