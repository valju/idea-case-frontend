import React, { Component } from 'react';
import CategoryDetails from '../../components/categoryComponents/CategoryDetails';


export default class CategoryDetailsView extends Component {

  render() {
    return (
      <div>
        <h2>Single Category in detail view</h2>
        <CategoryDetails />
      </div>
    );
  }
}