import React, { Component } from 'react';
import CategoryDetails from '../../components/categoryComponents/CategoryDetails';

export default class CategoryDetailsView extends Component {

  render() {
    return (
      <div>
        <h2>Category Details</h2>
        <CategoryDetails id={this.props.match.params.id}/>
      </div>
    );
  }
}
