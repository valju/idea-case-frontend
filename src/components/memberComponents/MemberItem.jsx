import React, { Component } from 'react';

export default class MemberItem extends Component {

  render() {
    return (
      <span>
        {` Id:${this.props.item.id}, First Name: ${this.props.item.firstName}, Last Name: ${this.props.item.lastName}, Email: ${this.props.item.email}`}
      </span>
    );
  }
}