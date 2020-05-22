import React, { Component } from 'react';
import CategoryAdd from '../../components/categoryComponents/CategoryAdd';
import CategoryList from '../../components/categoryComponents/CategoryList';
//import CategoryListHooks from '../../components/categoryComponents/CategoryListHooks';
import CategoryRandomized from '../../components/categoryComponents/CategoryRandomized';
import CategoriesIntellingentSearch from '../../components/categoryComponents/CategoriesIntellingentSearch';

export default class Categories2 extends Component {

  render() {
    return (
      <div>
        <h2>My Categories</h2>
        <CategoriesIntellingentSearch />
        <CategoryRandomized />
        <CategoryAdd />
        <CategoryList />
      </div>
    );
  }
}
