import React, { Component } from 'react';
import CategoryDetails from '../../components/categoryComponents/CategoryDetails';


export default class CategoryDetailsView extends Component {

  render() {
    return (
      <div>
        <h2>Single Category in detail view</h2>
        <p>Category id digged out of react-router-dom params: {this.props.match.params.id}</p>
        <CategoryDetails categoryId={this.props.match.params.id}/>
      </div>
    );
  }
}