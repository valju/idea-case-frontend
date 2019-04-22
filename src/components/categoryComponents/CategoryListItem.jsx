import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import {Link} from 'react-router-dom';

export default class CategoryListItem extends Component {

  render() {
    return (
      <li>
        <Link to={"/Category/"+this.props.item.id}>
          <CategoryItem item={this.props.item} />
        </Link>
        <span> </span>  {/* Just one space added before delete button */}
        <button type="button" 
            onClick={()=>{this.props.deleteCategoryClicked(
              this.props.item.id
            )}}
        >X</button>

        <span> </span>

        <Link to={"/CategoryUpdate/"+this.props.item.id}>
          <button type="button">Update this category</button>
        </Link>
        
      </li>
    );
  }
}
