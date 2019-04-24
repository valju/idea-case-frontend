import React, { Component } from "react";
import { connect } from "react-redux";
import CategoryItem from "./CategoryItem";
import { getCategory } from "../../actions/category";
import { Link } from "react-router-dom";

class CategoryDetails extends Component {
  componentWillMount = () => {
    this.props.categoryGetById(this.props.categoryId);
    console.log("from categoryDetails");
    console.log(this.props);
  };

  render = () => {
    return (
      <div>
        <h2>One Category</h2>
        <p>
          Category id digged out of react-router-dom params:{" "}
          {this.props.categoryId}
        </p>

        {this.props.categories.categoryCurrent === null ? (
          <CategoryItem
            item={{ name: "Hard-coded placeholder", budgetLimit: 12345 }}
          />
        ) : (
          <span>
            <CategoryItem item={this.props.categories.categoryCurrent} />
            <p>
              Description:{" "}
              {this.props.categories.categoryCurrent.description
                ? this.props.categories.categoryCurrent.description
                : "To be updated"}
            </p>
          </span>
        )}

        <p>
          <Link to="/Categories">Back to all categories</Link>
        </p>
      </div>
    );
  };
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
