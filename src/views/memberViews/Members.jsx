import React, { Component } from 'react';
import MemberList from '../../components/memberComponents/MemberList';

export default class Members extends Component {

  render() {
    return (
      <div>
        <h2>All Members</h2>
        <MemberList />
      </div>
    );
  }
}