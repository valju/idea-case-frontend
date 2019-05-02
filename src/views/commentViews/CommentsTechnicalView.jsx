import React, { Component } from 'react';
import CommentList from '../../components/commentComponents/CommentList';
import CommentAdd from '../../components/commentComponents/CommentAdd';

export default class CommentsTechnicalView extends Component {

  render() {
    return (
      <div>
        <h2>Comments Technical View</h2>
        <CommentAdd />
        <CommentList />
      </div>
    );
  }
}
