import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCategory } from '../../actions/category';
import { Button } from '@material-ui/core';

class CategoryAdd extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newCategoryObject:
        { name: "", description: "", budgetLimit: 0, },
    };
  }

  inputFieldValueChanged = (event) => {
    this.setState(
      {
        newCategoryObject:
          { ...this.state.newCategoryObject, [event.target.id]: event.target.value }
      });
  };

  addCategory = () => {
    const category = this.state.newCategoryObject;
    category.budgetLimit = Number(category.budgetLimit);
    this.props.addCategoryLocal(category);
    this.setState(
      {
        newCategoryObject:
          { name: "", description: "", budgetLimit: 0, },
      }
    );
  };

  render = () => {
    return (
      <div>
        <h4>New Category</h4>
        <p>
          Name: <input id="name" type="text" onChange={this.inputFieldValueChanged} value={this.state.newCategoryObject.name} /><br />
          Budget (&euro;): <input id="budgetLimit" type="number" onChange={this.inputFieldValueChanged} value={this.state.newCategoryObject.budgetLimit}  /><br />
          Description: <input id="description" type="text" size="50" onChange={this.inputFieldValueChanged} value={this.state.newCategoryObject.description} /><br />
          <Button className="ourButton" type="button" onClick={this.addCategory}>ADD NEW CATEGORY</Button>
        </p>
      </div>
    );
  };
}

const mapDispatchToProps = dispatch => ({
  addCategoryLocal: (category) => {
    dispatch(addCategory(category));
  },
});

export default connect(null, mapDispatchToProps)(CategoryAdd);
