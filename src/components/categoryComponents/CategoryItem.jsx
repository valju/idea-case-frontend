import React, { Component } from 'react';

export default class CategoryItem extends Component {

  render() {
    return (
      <div>
        <span style={{fontWeight:"bold"}}>
          {`${this.props.item.name}, budget limit: ${this.props.item.budgetLimit} €`}
        </span>
        <br />
        <span style={{color:"gray"}}>
          {`${this.props.item.description}`}
        </span>
      </div>
    );
  }
}
