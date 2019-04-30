import React, { Component } from "react";
import CategoryItem from "./CategoryItem";
import { getCategory } from "../../actions/category";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class CategoryDetails extends Component {
  componentWillMount() {
    this.props.categoryGetById(this.props.id);
  }

  render() {
    return (
      <div>
        {this.props.categories.categoryCurrent === null ? (
          <p>Waiting server response. Activity indicator could go here.</p>
        ) : (
            <div>
              <CategoryItem item={this.props.categories.categoryCurrent} />
              <Link to={`/category/update/${this.props.categories.categoryCurrent.id}`}>Update</Link>
            </div>
          )}

        <p>
          <Link to="/categories">Back</Link>
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  categoryGetById: id => {
    dispatch(getCategory(id));
  }
});

const mapStateToProps = state => ({
  categories: state.categories
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryDetails);
