<<<<<<< HEAD
import React, { Component } from 'react';
import CategoryUpdate from '../../components/categoryComponents/CategoryUpdate';


export default class CategoryUpdateView extends Component {

  render() {
    return (
      <div>
        <h2>Update category</h2>
        <p>Category id digged out of react-router-dom params: {this.props.match.params.id}</p>
        <CategoryUpdate categoryId={this.props.match.params.id}/>
=======
import React, { Component } from "react";
import CategoryUpdate from "../../components/categoryComponents/CategoryUpdate";

export default class CategoryUpdateView extends Component {
  render() {
    return (
      <div>
        <h2>Update Category</h2>
        <CategoryUpdate id={this.props.match.params.id} />
>>>>>>> 02ea031afc5ec168a80dc0ea57d5aa949f67fbc2
      </div>
    );
  }
}