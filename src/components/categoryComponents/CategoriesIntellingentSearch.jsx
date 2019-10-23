import React, { Component } from 'react';
import { connect } from 'react-redux';

import {categoriesSearchByKeyword} from '../../actions/category';
import CategoryItem from './CategoryItem';

// One of the simplest possible sensible Redux-connected React examples:

class CategoriesIntellingentSearch extends Component {

  componentDidMount() {
    let keyword = "Training";
    this.props.categoriesSearchByKeywordLocal(keyword);
  }

  render() {
    let categorySearchList = this.props.categories.categorySearchList;
    return (
      <div>
        <h2>Found Categories based on keyword</h2>
        <p>
        {

          categorySearchList.map( (item, index) => (
              <CategoryItem item={item} />
            )

          )
        }
        </p>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => ({
  categoriesSearchByKeywordLocal: (keyword) => {
    dispatch(categoriesSearchByKeyword(keyword));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesIntellingentSearch);
