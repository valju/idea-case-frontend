import React, { Component } from 'react';

export default class CategoryItem extends Component {

  render() {
    return (
      <span>
        {`Category: ${this.props.item.name}, budget limit: ${this.props.item.budgetLimit} euros`}
      </span>
    );
  }
}
