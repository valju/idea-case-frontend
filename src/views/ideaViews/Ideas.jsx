import React, { Component } from 'react';
import IdeaAdd from '../../components/ideaComponents/IdeaAdd';
import IdeaList from '../../components/ideaComponents/IdeaList';
// import CategoryRandomized from '../../components/categoryComponents/CategoryRandomized';

export default class Ideas extends Component {

  render() {
    return (
      <div>
        <h2>Our Ideas</h2>
        <IdeaAdd />
        <IdeaList />
        {/* <CategoryAdd />
        <CategoryList />
        <CategoryRandomized /> */}
      </div>
    );
  }
}