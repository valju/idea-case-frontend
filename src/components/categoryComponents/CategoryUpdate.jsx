import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateCategory } from "../../actions/category";
class CategoryUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCategoryObject: {
        id: this.props.categoryId,
        name: null,
        description: null,
        budgetLimit: null
      }
    };
  }
  inputFieldValueChanged = event => {
    this.setState({
      newCategoryObject: {
        ...this.state.newCategoryObject,
        [event.target.id]: event.target.value
      }
    });
  };
  editCategoryButtonClicked = () => {
    const category = this.state.newCategoryObject;
    category.id = Number(category.id); // id to Number
    category.budgetLimit = Number(category.budgetLimit);
    this.props.updateCategoryLocal(category);

    this.setState({
      newCategoryObject: { id: "", name: "", budgetLimit: "" }
    });
    this.props.history.push("/Categories");
  };
  render() {
    return (
      <div>
        <h4>Edit Category {this.props.location.state.categoryPassed.name}</h4>
        <p>
          Name:{" "}
          <input id="name" type="text" onChange={this.inputFieldValueChanged} />
          <br />
          Description:{" "}
          <input
            id="description"
            type="text"
            onChange={this.inputFieldValueChanged}
          />
          <br />
          Budget limit:{" "}
          <input
            id="budgetLimit"
            type="number"
            onChange={this.inputFieldValueChanged}
          />
          <br />
          <button type="button" onClick={this.editCategoryButtonClicked}>
            EDIT CATEGORY
          </button>
        </p>

        <p>
          <Link to="/Categories">Back to all categories</Link>
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCategoryLocal: category => {
    dispatch(updateCategory(category));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(withRouter(CategoryUpdate));
