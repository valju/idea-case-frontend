import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCategory } from "../../actions/category";
import CategoryItem from "./CategoryItem";
import { getCategory } from "../../actions/category";

class CategoryUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editedCategory: null
    };
  }

  componentDidMount() {
    //    this.props.categoryGetById(this.props.id);
    if (this.props.categories.categoryCurrent != null) {
      this.setState({
        editedCategory: this.props.categories.categoryCurrent
      });
    }
  }

  inputFieldValueChanged = event => {
    const updatedField = event.target.id; // = this.state.editedCategory;
    let updatedValue = event.target.value;
    if (updatedField === "id" || updatedField === "budgetLimit") {
      updatedValue = Number(updatedValue);
    }

    this.setState({
      editedCategory: {
        ...this.state.editedCategory,
        [updatedField]: updatedValue
      }
    });


  };

  updateCategory = () => {
    this.props.updateCategoryLocal(this.state.editedCategory);
  };

  render = () => {


    return (
      <div>
        {this.state.editedCategory === null ? (
          <p>Waiting server response. Activity indicator could go here.</p>
        ) : (
            <div>
              <h3>Old object</h3>
              <CategoryItem item={this.state.editedCategory} />


              <p>

                <input
                  id="id"
                  type="hidden"
                  onChange={this.inputFieldValueChanged}
                  value={this.state.editedCategory.id}
                />
                Name:&nbsp;
                <input
                  id="name"
                  type="text"
                  onChange={this.inputFieldValueChanged}
                  value={this.state.editedCategory.name}
                />
                <br />
                Budget (&euro;):{" "}
                <input
                  id="budgetLimit"
                  type="number"
                  onChange={this.inputFieldValueChanged}
                  value={this.state.editedCategory.budgetLimit}
                />
                <br />
                Description:{" "}
                <input
                  id="description"
                  type="text"
                  size="50"
                  onChange={this.inputFieldValueChanged}
                  value={this.state.editedCategory.description}
                />
                <br />
                <button type="button" onClick={this.updateCategory}>
                  SAVE
                </button>
                <p>
                  <Link to="/categories">Back</Link>
                </p>
              </p>
            </div>
          )}
      </div>
    );
  };
}

const mapDispatchToProps = dispatch => ({
  updateCategoryLocal: category => {
    dispatch(updateCategory(category));
  }
});
const mapStateToProps = state => ({
  categories: state.categories
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryUpdate);
