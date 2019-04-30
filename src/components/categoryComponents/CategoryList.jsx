import React, { Component } from 'react';
import { fetchAllCategories, deleteCategory } from '../../actions/category';
import CategoryListItem from './CategoryListItem';
import { connect } from 'react-redux';

class CategoryList extends Component {

  componentDidMount() {
    this.props.categoriesFetchAll();
  }

  render() {
    return (
      <div>
        <h4>List of Categories</h4>
        <ol>
          {
            this.props.categories.categoryList.map((item) =>
              <CategoryListItem key={item.id} item={item} delete={this.props.deleteCategoryLocal} />
            )
          }
        </ol>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  categoriesFetchAll: () => {
    dispatch(fetchAllCategories());
  },
  deleteCategoryLocal: (id) => {
    dispatch(deleteCategory(id))
  }
});

const mapStateToProps = state => ({
  categories: state.categories,
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);

// What happens with last line? Kind of this:
// export default prepareToConnect(mapStateToProps,mapDispatchToProps)(CategoryList);
// export default doActualConnect(CategoryList);
// export default reduxConnectedComponentType;   // exports a redux-connected React component