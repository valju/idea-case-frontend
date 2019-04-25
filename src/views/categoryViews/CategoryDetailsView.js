import React, { Component } from 'react';
import CategoryDetails from '../../components/categoryComponents/CategoryDetails';
import {connect} from 'react-redux';
import {getCategory} from '../../actions/category';



class CategoryDetailsView extends Component {

  componentDidMount = () => {
    this.props.categoryGetById(this.props.match.params.id);   
  }

  render() {
    return (
      <div>
        <h2>Single Category in detail view</h2>
        <p>Category id digged out of react-router-dom params: {this.props.match.params.id}</p>
        <CategoryDetails />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  categoryGetById: (id) => {
    dispatch(getCategory(id));
  },
})

export default connect(null, mapDispatchToProps)(CategoryDetailsView);