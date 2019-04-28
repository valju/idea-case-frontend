import React, { Component } from "react";
import { connect } from "react-redux";
import CategoryItem from "./MemberItem";
import { getCategory } from "../../actions/category";
import { Link } from "react-router-dom";

class CategoryDetails extends Component {
  componentDidMount = () => {
    this.props.categoryGetById(this.props.match.params.id);
  };

  render = () => {
    return (
      <div>
        <h2>One Category</h2>
        <p>
          Category id digged out of react-router-dom params:{" "}
          {this.props.match.params.id}
        </p>

        {this.props.categories.categoryCurrent === null ? (
          <CategoryItem
            item={{ name: "Hard-coded placeholder", budgetLimit: 12345 }}
          />
        ) : (
          <CategoryItem item={this.props.categories.categoryCurrent} />
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
