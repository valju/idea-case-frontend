import React, { Component } from "react";
import CategoryItem from "./CategoryItem";
import { connect } from "react-redux";

class CategoryRandomized extends Component {
  render() {
    let category = { id: -1, name: "N/A", budgetLimit: "-1" };
    const categoryList = this.props.categories.categoryList;

    if (categoryList && categoryList.length > 0) {
      let randomizedId = Math.floor(Math.random() * categoryList.length);
      category = categoryList[randomizedId];
    }

    return (
      <div>
        <h4>Randomized category:</h4>
        <CategoryItem item={category} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

export default connect(
  mapStateToProps,
  null
)(CategoryRandomized);
