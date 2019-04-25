import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import { connect } from 'react-redux';

class CategoryRandomized extends Component {

  render() {
    let category = null;
    const categoryList = this.props.categories.categoryList;

    if (categoryList && categoryList.length > 0) {
      let randomizedId = Math.floor(
        Math.random() * categoryList.length
      );
      category = categoryList[randomizedId];
    }

    return (
      <div>
        <h4>Randomized Category</h4>
        {
          (category === null)
            ?
            <p>The list of Categories is empty</p>
            :
            <CategoryItem item={category} />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, null)(CategoryRandomized);
