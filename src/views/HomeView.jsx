import React, { Component } from 'react';
import CommentActivity from '../components/commentComponents/CommentActivity';

export default class HomeView extends Component {

  render() {
    return (
      <div>
        <h2>Idea extravaganza</h2>
        <CommentActivity />
      </div>
    );
  }
}
