import React, { Component } from 'react';
import {connect} from 'react-redux';
import CategoryItem from './CategoryItem';
import {getCategory} from '../../actions/category';
import {Link} from 'react-router-dom';

class CategoryDetails extends Component {
  // componentDidMount = () => {
  //      // }

  render = () => {
    //this.props.categoryGetById(this.props.categoryId);    

    return (  
      <div>
        <h2>One Category</h2>
        { (this.props.categories.categoryCurrent === null) 
                ?
            <CategoryItem item={{name:"Hard-coded placeholder", budgetLimit:12345}} />
                :
            <CategoryItem item={this.props.categories.categoryCurrent} />
        }

        <p><Link to="/Categories">Back to all categories</Link></p>
      </div>
    );
  }
}


// const mapDispatchToProps = dispatch => ({
//   categoryGetById: (id) => {
//     dispatch(getCategory(id));
//   },
// });

const mapStateToProps = state => ({
  categories: state.categories,
});

export default connect(mapStateToProps, null)(CategoryDetails);

