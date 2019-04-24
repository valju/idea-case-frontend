import React, { Component } from "react";
//import { fetchTestCategories as oldOne } from '../../models/Test';
import { fetchAllCategories, deleteCategory } from "../../actions/category";
import CategoryListItem from "./CategoryListItem";
import { connect } from "react-redux";

class CategoryList extends Component {
  /*
  constructor(props) {
    super(props);
    //this.state = { categories: [] };
  }
  */

  componentDidMount() {
    //this.setState({ categories: fetchTestCategories() });
    this.props.categoriesFetchAll();
  }

  render() {
    return (
      <div>
        <h4>List of Categories</h4>
        <ul>
          {this.props.categories.categoryList.map(item => (
            <CategoryListItem
              key={item.id}
              item={item}
              deleteCategoryClicked={this.props.deleteCategoryLocal}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  categoriesFetchAll: () => {
    dispatch(fetchAllCategories());
  },
  deleteCategoryLocal: id => {
    dispatch(deleteCategory(id));
  }
});

const mapStateToProps = state => ({
  categories: state.categories
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);

// What happens with last line? Kind of this:
// export default prepareToConnect(mapStateToProps,mapDispatchToProps)(CategoryList);
// export default doActualConnect(CategoryList);
// export default reduxConnectedComponentType;   // exports a redux-connected React component
