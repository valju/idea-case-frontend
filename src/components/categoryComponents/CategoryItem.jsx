import React, { Component } from 'react';

export default class CategoryItem extends Component {

  render() {
    return (
      <div>
        <span>
          {`${this.props.item.name}, budget limit: ${this.props.item.budgetLimit} €`}
        </span>
        <br />
        <span>
          {`${this.props.item.description}`}
        </span>
      </div>
    );
  }
}
