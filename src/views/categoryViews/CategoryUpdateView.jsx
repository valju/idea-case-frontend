import React, { Component } from 'react';
import CategoryUpdate from '../../components/categoryComponents/CategoryUpdate';

export default class CategoryUpdateView extends Component {
  render() {
    return (
      <div>
        <h2>Update Category</h2>
        <CategoryUpdate id={this.props.match.params.id} />
      </div>
    );
  }
}