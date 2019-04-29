import React, { Component } from 'react';
import CategoryAdd from '../../components/categoryComponents/CategoryAdd';
import CategoryList from '../../components/categoryComponents/CategoryList';
import CategoryRandomized from '../../components/categoryComponents/CategoryRandomized';
import Dashboard from '../navbarViews/dashboard';

export default class Categories extends Component {

  render() {
    return (
      <div>
        <Dashboard />
        <h2>My Categories</h2>
        <CategoryAdd />
        <CategoryList />
        <CategoryRandomized />
      </div>
    );
  }
}