import React, { Component } from 'react';
import CategoryUpdate from '../../components/categoryComponents/CategoryUpdate';


export default class CategoryUpdateView extends Component {

  render() {
    return (
      <div>
        <h2>Update category</h2>
        <p>Category id digged out of react-router-dom params: {this.props.match.params.id}</p>
        <CategoryUpdate categoryId={this.props.match.params.id}/>
      </div>
    );
  }
}