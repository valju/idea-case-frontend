import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import { getCategory } from '../../actions/category';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchAllIdeas} from '../../actions/idea';
import IdeaListItem from "../ideaComponents/IdeaListItem";


class CategoryDetails extends Component {
  componentWillMount() {
    this.props.categoryGetById(this.props.id);
  }

  componentDidMount() {
    this.props.ideasFetchAll();
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
        <span>
        </span>
        <div>
        <ol>
          {
            this.props.ideas.ideaList.filter(item=> item.categoryId == this.props.categories.categoryCurrent.id).map((item) =>
                <IdeaListItem key={item.id} item={item}
               />
            )
            
          }
        </ol>
        </div>
        <p>
          <Link to='/categories'>Back</Link>
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  categoryGetById: (id) => {
    dispatch(getCategory(id));
  },
  ideasFetchAll: (categoryId) => {
    dispatch(fetchAllIdeas(categoryId));
  },
});

const mapStateToProps = state => ({
  categories: state.categories,
  ideas: state.ideas,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryDetails);

