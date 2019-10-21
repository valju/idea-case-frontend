import React, { Component } from 'react';
import CategoryAdd from '../../components/categoryComponents/CategoryAdd';
import CategoryList from '../../components/categoryComponents/CategoryList';
import CategoryRandomized from '../../components/categoryComponents/CategoryRandomized';

export default class Categories extends Component {

  render() {
    return (
      <div>
        <h2>My Categories</h2>
        <CategoryRandomized />
        <CategoryAdd />
        <CategoryRandomized />
        <CategoryList />
        <CategoryRandomized />
      </div>
    );
  }
}
