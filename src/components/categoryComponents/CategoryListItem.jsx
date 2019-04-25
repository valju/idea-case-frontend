import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import { Link } from 'react-router-dom';

export default class CategoryListItem extends Component {

  render() {
    return (
      <li>
        <CategoryItem item={this.props.item} />
        &nbsp;&nbsp;
        <Link to={ `/category/${this.props.item.id}` }>View</Link>
        &nbsp;&nbsp;
        {/*
        <Link to={ `/category_update/${this.props.item.id}` }>Edit</Link>
        &nbsp;&nbsp;
        */}
        <button type="button" onClick={ () => this.props.delete(this.props.item.id) }>Del</button>       
        <hr />
      </li>
    );
  }
}
